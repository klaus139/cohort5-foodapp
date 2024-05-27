import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets/assets";
import './navbar.css';
import { StoreContext } from "../../Context/storeContext";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount, token, setToken} = useContext(StoreContext)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate('/')
  }

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`${menu === "home" ? "active" : ""}`}
        >
          Home
        </Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")}  className={`${menu === "menu" ? "active" : ""}`}>Menu</a>
        <a href="#app-download" onClick={() => setMenu("mob-app")}  className={`${menu === "mob-app" ? "active" : ""}`}>Mobile App</a>
        <a href="#footer" onClick={() => setMenu("contact")}  className={`${menu === "contact" ? "active" : ""}`}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
      <img src={assets.search} alt='search'/>
     <Link to='/cart' className='navbar-search-icon'>
      <img src={assets.cart} alt=''/>
      <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
     </Link>
     {!token ? <button onClick={() => setShowLogin(true)}>Sign in </button> : 
     <div className='navbar-profile'>
      <img src={assets.profile} alt=''/>
      <ul className='navbar-profile-dropdown'>
        <li onClick={() => navigate('/myorders')}>

        <img src={assets.bagIcon} alt='' />
        <p>Orders</p>
        </li>
        <hr />
        <li onClick={logout}>

        <img src={assets.logout} alt='' />
        <p>Logout</p>
        </li>

     
      </ul>
     </div>
     
    }
      </div>
    </div>
  );
};

export default Navbar;
