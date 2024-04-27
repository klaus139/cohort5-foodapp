import './App.css';
import Navbar from './components/navbar/Navbar';
import {Routes, Route } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

import Home from './components/home/Home';




function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
