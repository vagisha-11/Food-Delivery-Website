import React, { useState } from 'react'
import Navbar from "/Users/vagishashrivastava/Desktop/foodwebsite/frontend/src/components/Navbar/Navbar"
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import FoodDisplay from './components/FoodDisplay/FoodDisplay'

const App = () => {
  const[showLogin,setShowLogin]=useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/food-display" element={<FoodDisplay />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App