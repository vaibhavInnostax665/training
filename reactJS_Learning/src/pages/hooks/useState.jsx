import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const UseState = () => {
  const [model,setModel] = useState("");
  const navigate=useNavigate();
  
  return (
    <>
    <h1>My favroite bike is {model}!</h1>
    <button type='button' onClick={()=> setModel("Yamaha")}>Yamaha</button>
    <button type='button' onClick={()=> setModel("Bajaj")}>Bajaj</button>
    <button type='button' onClick={()=> setModel("BMW")}>BMW</button>
    <button type='button' onClick={()=> setModel("Hero Motocorps")}>Hero Motocorps</button>
    <br/>
    <br/>
  
    </>
  )
}

export default UseState;