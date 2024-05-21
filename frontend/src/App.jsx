import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  

  return (
    <>
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
