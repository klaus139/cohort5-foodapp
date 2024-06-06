import React, {useContext, useState, useEffect} from 'react'
import { StoreContext } from '../../Context/storeContext';
import { assets } from '../../assets/assets/assets';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios"

import './placeorder.css';

const PlaceOrder = () => {

    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        phone:"",
    });

    const { url,
        food_list,
        cartItems,
        token,
        getTotalCartAmount,
       } = useContext(StoreContext);

       const navigate = useNavigate();

       const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({...data, [name]: value}))
       }

       const placeOrder = async (e) => {
        e.preventDefault();
        let orderItems = [];
        food_list.map(((item) => {
            if(cartItems[item._id] > 0){
                let itemInfo = item;
                itemInfo["quantity"]  = cartItems[item._id];
                orderItems.push(itemInfo)
            }
        }))

        let orderData = {
            address:data,
            items:orderItems,
            amount:getTotalCartAmount() + 5,
        }
        let response = await axios.post(url + "/api/order/place", orderData, { headers: {token}})

        if(response.data.success) {
            const {session_url} = response.data;
            window.location.replace(session_url)
        } else {
            toast.error("something went wrong")
        }
       }
    useEffect(() => {
        if(!token){
            toast.error("to place an order you must first sign in")
            navigate('/cart')
        }
        else if (getTotalCartAmount() === 0){
            navigate("/cart")
        }
    },[token])




  return (
   <form onSubmit={placeOrder} className='place-order'>
    <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-field'>
            <input type='text' name="firstName" onChange={onChangeHandler} value={data.firstName} placeholder='First Name' required />
            <input type='text' name="lastName" onChange={onChangeHandler} value={data.lastName} placeholder='Last Name' required />
        </div>
        <input type='email' name="email" onChange={onChangeHandler} value={data.email} placeholder='Email Address' required />
        <input type='text' name="street" onChange={onChangeHandler} value={data.street} placeholder='Street' required />
        <div className='multi-field'>
            <input type='text' name="city" onChange={onChangeHandler} value={data.city} placeholder='City' required />
            <input type='text' name="state" onChange={onChangeHandler} value={data.state} placeholder='State' required />
        </div>
        <div className='multi-field'>
            <input type='text' name="zipcode" onChange={onChangeHandler} value={data.zipcode} placeholder='Zipcode' required />
            <input type='text' name="country" onChange={onChangeHandler} value={data.country} placeholder='Country' required />
        </div>
        <input type='text' name="phone" onChange={onChangeHandler} value={data.phone} placeholder='Phone' required />
    </div>
    <div className='place-order-right'>
        <div className='cart-total'>
            <h2>Cart Totals</h2>
            <div>
            <div className='cart-total-details'> <p>Subtotal</p> <p>${getTotalCartAmount()}</p></div>
            <hr />
            <div className='cart-total-details'><p>Delivery Fee</p> <p>${getTotalCartAmount() === 0 ? 0 : 5}</p></div>
            <hr />
            <div className='cart-total-details'><p>Total</p> <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()+ 5}</p></div>
            </div>

        </div>
        <button className='place-order-submit' type='submit'>Proceed to Payment</button>
    </div>

   </form>
  )
}

export default PlaceOrder