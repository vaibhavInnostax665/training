import React , {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';

const UseEffect = () => {
    const navigate = useNavigate();
    const [count,setCount] = useState(0);
const [start,setStart] = useState(false);
function toggleStart(){
    setStart(!start);
}
    useEffect(()=>{
        
        setTimeout(()=> setCount(count+1),1000);
        
        //console.log("UseEffect Call");
    },[start])

  
  return (
    <div>
       
        <h1>Value of Count is {count}</h1>
        <button onClick={toggleStart}>change state of dependency</button>
        <br/>
        <br/> 
       
        </div>
  )
}

export default UseEffect