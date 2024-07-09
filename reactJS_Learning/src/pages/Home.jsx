import React, { useContext, useState } from 'react'
import ExampleContext from './hooks/UseContextHook';
import { useNavigate } from 'react-router-dom';
import CustomHook from './hooks/CustomHook';


const Home = () => {
    const {values,setValues} = useContext(ExampleContext);
const navigate = useNavigate();
function increaseValueOfContext(){
  return setValues(values+1);
}
const [num1,setNum1] = useState(0);
const [num2,setNum2] = useState(0);
const [num,setNum]= useState(0);
const handleAddition = ()=>{
const num3 = CustomHook(Number(num1),Number(num2));
console.log(typeof +num3);
console.log(typeof +num1);
setNum(num3);
}
  return (
    <div><h1>Home</h1>
        <p>values from context hook is {values}</p>
        <button onClick={increaseValueOfContext}>Increase value by 1</button>
        <br />
        <br/>
        <h3>Addition</h3>
<input type='number' value={num1} onChange={(e)=>setNum1(e.target.value)} />
<input type='number' value={num2} onChange={(e)=>setNum2(e.target.value)} />
<br />
<button onClick={handleAddition}>ADD</button>
<br/>
       Addition value using custom Hook is : {num}
    </div>
  )
}

export default Home