import React from 'react';
import {FaBuilding} from "react-icons/fa";

import './App.css';



function WelcomeGreetings() {
  return (
    <>
    <div className="Greetings">
    <FaBuilding  style={{color: 'white', fontSize: '50px',marginLeft:'50px',marginTop:'50px'}}/> 
      <h1>Visit  New  York</h1> 
      <p>Express yourself and explore</p>
      </div>
    </>
    
  )
}

export default WelcomeGreetings