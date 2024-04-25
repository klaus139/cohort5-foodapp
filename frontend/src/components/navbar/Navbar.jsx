import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import classes from './navbar.module.css'

import "./navbar.css";
import { AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai'
//import {useDispatch} from 'react-redux'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    // const dispatch = useDispatch()
    // const navigate = useNavigate();

    window.onscroll = () => {
        setIsScrolled(window.pageXOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }

    // const handleLogout = () => {
    //     dispatch(logout())
    //     navigate('/login')
    // }


    
  return (
    // <div className={`${classes.container} ${isScrolled && classes.scrolled}`} onClick={()=> setMenuOpen(!menuOpen)}>
    //     <div className={classes.wrapper}>
    //         <div className={classes.left}>
    //             <Link to='/' className={classes.title}>
    //                 C5-FoodStore
    //             </Link>

    //         </div>
    //         <div className={classes.center}>
    //             <ul className={classes.list}>
    //                 <li className={classes.listItem}>
    //                     <a href='/'>Home</a>
    //                 </li>
    //                 <li className={classes.listItem}>
    //                     <a href='#contacts'>Contacts</a>
    //                 </li>
    //                 <li className={classes.listItem}>
    //                     <a href='#foods'>Food</a>
    //                 </li>
    //                 <li className={classes.listItem}>
    //                     <a href='#faq'>FAQ</a>
    //                 </li>
    //                 <li className={classes.listItem}>
    //                     <Link to='/create'>Create</Link>
    //                 </li>

    //             </ul>
    //         </div>
    //         <div className={classes.right}>
    //             <AiOutlineUser className={classes.userIcon} />
    //             <Link to='/cart' className={classes.cartContainer}>
    //                 <AiOutlineShoppingCart className={classes.cartIcon}/>
    //                 <div className={classes.cartQuantity}>3</div>
    //             </Link>
    //             <button  className={classes.logout}>Logout</button>


    //         </div>
    //     </div>
        
    // </div>
    <nav>
   <div className={classes.wrapper}>
   <Link to="/" className={`${classes.left} title`}>
      C5-FOODAPP
    </Link>
    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
   <div>
   <ul className={menuOpen ? "open" : ""}>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
   </div>
    <div className={classes.right}>
                <AiOutlineUser className={classes.userIcon} />
                <Link to='/cart' className={classes.cartContainer}>
                    <AiOutlineShoppingCart className={classes.cartIcon}/>
                    <div className={classes.cartQuantity}>3</div>
                </Link>
                <button  className={classes.logout}>Logout</button>


            </div>
    
   </div>
  </nav>
  )
}

export default Navbar