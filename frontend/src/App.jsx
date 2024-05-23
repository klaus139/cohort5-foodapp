import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LoginPopup from './components/LoginPopup/LoginPopup';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  

  return (
    <>
    <ToastContainer />
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <div className='app'>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </div>
    <Footer />
    </>
   
  )
}

export default App
