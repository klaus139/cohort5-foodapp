import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LoginPopup from './components/LoginPopup/LoginPopup';
import MyOrder from './pages/MyOrders/MyOrder';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  

  return (
    <>
    <ToastContainer />
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
      <Route path='/' element={<Home />} />
            <Route path='/myorders' element={<MyOrder />} />
    </Routes>
    </div>
    <Footer />
    </>
   
  )
}

export default App
