import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";


function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
  
     
      <Footer />
    </div>
  );
}

export default App;
