import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';


function App() {
  

  return (
    <div className='app'>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </div>
   
  )
}

export default App
