import React from 'react';


function Increment(props) {
  return (
    <div>
       
        <h1>{props.Count}</h1>
        <button onClick={props.newIncrement}>Click</button>
        
        
    </div> 
  );
}

export default Increment;