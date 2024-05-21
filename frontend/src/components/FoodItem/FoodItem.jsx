import React from 'react'
import './foodItem.css'
import { assets } from '../../assets/assets/assets'
import { StoreContext } from '../../Context/storeContext'

const FoodItem = ({image, name, price, desc, }) => {

  //const [itemCount, setItemCount] = useState(0);

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt="" />
      </div>
      <div className='foood-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating} alt='' />
        </div>
        <p className='food-item-desc'>{desc}</p>
        <p className='food-item-price'>₦{price}</p>
      </div>

    </div>
  )
}

export default FoodItem