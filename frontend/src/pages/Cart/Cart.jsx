import React, {useContext} from 'react'
import './cart.css';

import { StoreContext } from '../../Context/storeContext';

import {useNavigate} from 'react-router-dom';

const Cart = () => {
  const { url,
    food_list,
    cartItems,
    removeFromCart,
    getTotalCartAmount,
   } = useContext(StoreContext);

   const navigate = useNavigate();

   const deliveryFee = 5


  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
        </div>
        <br />
        <hr/>
        {food_list.map((item, index) => {
          if(cartItems[item._id]>0){
            return (
              <div key={index}>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt='' />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                 <div>{cartItems[item._id]}</div>
                 <p>${item.price*cartItems[item._id]}</p>
                 <p className='cart-items-remove-icon' onClick={() => removeFromCart(item._id)}>X</p>
                </div>
                <hr/>
              </div>
            )
          }
        })}
      </div>

      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'> <p>Subtotal</p> <p>${getTotalCartAmount()}</p></div>
            <hr />
            <div className='cart-total-details'><p>Delivery Fee</p> <p>${getTotalCartAmount() === 0 ? 0 : deliveryFee}</p></div>
            <hr />
            <div className='cart-total-details'><p>Total</p> <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()+ deliveryFee}</p></div>

          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type='text' placeholder='promo code' />
              <button>Submit</button>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart