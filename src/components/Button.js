import Dashboard from "../pages/Dashboard";
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

function MyButton() {
  const navigate = useNavigate();
    
  const handleClick = () => {
    navigate('/dashboard');
  }
  
  return (
      <div> 
          <button onClick={handleClick}>I'm a button</button>
      </div>
    );
}

export default MyButton;