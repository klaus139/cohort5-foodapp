import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets/assets";
import './navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
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
      <div className=""></div>
     </Link>
      </div>
    </div>
  );
};

export default Navbar;
