import React, {useState, useEffect, useContext} from 'react'
import './myorder.css';
import axios from "axios"

import { StoreContext } from '../../Context/storeContext';
import { assets } from '../../assets/assets/assets';

const MyOrder = () => {
    const [data, setData] = useState([]);
    const {url, token} = useContext(StoreContext)

    const fetchOrders = async () => {
        const response = axios.post(url+"/api/order/useorders", {}, {headers:{token}})
        setData(response.data.data)
    }

    useEffect(() => {
        if(token){
            fetchOrders()
        }
    },[token])

  return (
    <div className='my-orders'>
        <h2>My Orders</h2>
        {/* <div className='container'>
            {data.map((order, index) => {
                return (
                    // <div key={index} className='my-orders-order'>
                    //     <img src={assets.box} alt=""/>
                    //     <p>{order.items.map((item, index) => {
                    //         if(index === order.items.length -1){
                    //             return item.name+" x "+item.quantity
                    //         }
                    //         else{
                    //             return item.name+ "x"+item.quantity + ","
                    //         }
                    //     })}></p>

                    // </div>
                )
            })}

        </div> */}

    </div>
  )
}

export default MyOrder