import React, { useContext, useState } from "react";
import "./loginpopup.css";
import { assets } from "../../assets/assets/assets";
import { StoreContext } from "../../Context/storeContext";
import axios from "axios"
import {toast} from "react-toastify"

const LoginPopup = ({setShowLogin}) => {
    const {setToken, url} = useContext(StoreContext)
  const [currState, setCurrState] = useState("Sign Up");

  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  })

  //console.log
 

  

  const onLogin = async (e) => {
    e.preventDefault();
    
    let new_url = url


    if(currState === "Login"){
        new_url += '/api/user/login'
    }else{
        new_url += "/api/user/register"
   
    }
    const response = await axios.post(new_url, data);

    if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem("token", response.data.token)
        toast.success("success")
        setShowLogin(false)
    }
    else{
        toast.error(response.data.message)
    }
  }

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data => ({...data, [name]:value}))
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img src={assets.cancel} alt="login" onClick={() => setShowLogin(false)} />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" ? (
            <input
              name="name"
              onChange={onChangeHandler}
                value={data.name}
              type="text"
              placeholder="enter your name"
              required
            />
          ) : (
            <>
            
            </>
          )}
          <input
            name="email"
            onChange={onChangeHandler}
              value={data.email}
            type="text"
            placeholder="your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
              value={data.password}
            type="text"
            placeholder="password"
            required
          />
        </div>
        <button>{currState === "Login" ? "Login now" : "Create account"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" required />
          <p>By Continuing, I agree to the terms of use and & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
