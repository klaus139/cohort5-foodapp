import React, {useContext} from 'react'
import './exploremenu.css';
import { StoreContext } from '../../Context/storeContext';

const ExploreMenu = () => {
    const {menu_list} = useContext(StoreContext)
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable arrays of dishes. Our mission is to staisfy your craving</p>
        <div className='explore-menu-list'>
            {/* MENU LIST */}
            {menu_list.map((item, index) => {
                return (
                    <div key={index} className="explore-menu-list-item">
                            <img src={item.menu_image} alt='' />
                            <p>{item.menu_name}</p>
                    </div>
                )
            })}
            
        </div>
    </div>
  )
}

export default ExploreMenu