import React from 'react';

const UseCallback = ({handleClick}) => {
    
  return (
    <div>
        <h1>useCallback Hook</h1>
        <button onClick={handleClick}>Run function from parent component</button>
    </div>
  )
}

export default UseCallback