import { useState, useMemo } from "react";


const UseMemo = () => {
  const [count, setCount] = useState(0);
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const decrement = () =>{
    setCount((c)=> c - 1);
  }
  

  return (
    
    
      <div>
      
        <h2>Expensive Calculation</h2>
        {calculation}
        <br />
        <br />
        Count: {count}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        
      </div>
   
  );
};



export default UseMemo;