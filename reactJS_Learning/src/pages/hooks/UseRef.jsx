import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseCallback from './UseCallback';


const UseRef = () => {
    const navigate = useNavigate('/useEffect');
    const ref = useRef(0);
    function increaseValue(){
        ref.current = ref.current + 1;
        alert("Ref current value is: "+ref.current)
    }
    const [count,setCount] = useState(0);
    const handleClick =useCallback(()=> {setCount(count+1);
        console.log(count);
    },[count])
  return (
    <div>
      <h1>UseRef</h1>  
    <br />
<button onClick={increaseValue}>Increase value by 1</button>
    <br/>
    <br/>
 <UseCallback handleClick={handleClick}/>
    </div>
  )
}

export default UseRef