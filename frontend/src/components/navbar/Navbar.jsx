import React from 'react'
import { Link } from 'react-router-dom'
import classes from './navbar.module.css'
import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'

import { useState } from 'react'
//import { useDispatch, useSelector } from 'react-redux'
//import { logout } from '../../redux/authSlice'

const Navbar = () => {
  // adding the states 
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

  const handleLogout = () => {
    // dispatch(logout())
    // navigate('/login')
  }

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }
  return (
    <div className={`${isScrolled && classes.scrolled} ${classes.container}`}>
      <header className="App-header">
        <nav className={`${classes.navbar}`}>
          {/* logo */}
          <div className={classes.left}>
          <a href='/' className={`${classes.logo}`}>C6-FOODS </a>

          </div>
         
         <div className={classes.center}>
         <ul className={`${classes.navMenu} ${isActive ? classes.active : ''}`}>
            <li onClick={removeActive}>
              <a href='/' className={`${classes.navLink}`}>Home</a>
            </li>
            <li onClick={removeActive}>
              <a href='#contacts' className={`${classes.navLink}`}>Contacts</a>
            </li>
            <li onClick={removeActive}>
              <a href='#foods' className={`${classes.navLink}`}>Foods</a>
            </li>
            <li onClick={removeActive}>
              <a href='#faq' className={`${classes.navLink}`}>FAQ</a>
            </li>
            <li onClick={removeActive}>
              <a href='/create' className={`${classes.navLink}`}>Create</a>
            </li>
          </ul>
         </div>
          <div className={classes.right}>
          <AiOutlineUser className={classes.userIcon}/>
          <Link to='/cart' className={classes.cartContainer}>
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <div className={classes.cartQuantity}>3</div>
          </Link>
          <button onClick={handleLogout} className={classes.logout}>Logout</button>
          </div>
          <div className={`${classes.hamburger} ${isActive ? classes.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${classes.bar}`}></span>
            <span className={`${classes.bar}`}></span>
            <span className={`${classes.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar