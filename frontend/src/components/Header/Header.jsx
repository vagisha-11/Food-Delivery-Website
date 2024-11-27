import React from 'react'
import { Link } from "react-router-dom"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"
import './Header.css'
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-contents">
          <h2>Order your Favourite Food Here</h2>
          <p>
            Choose from a diverse menu featuring a deectable array of dishes
            crafted with the finest ingredients
          </p>
         
            <button >View Menu</button>
         
        </div>
      </div>
    </>
  );
}

export default Header