import React, { useState } from 'react';
import Increment from './Increment';

function Counter() {
    const [Count,setCount]=useState(0);
    

    
  return (
    <div>
        { Count <10 && (
        <Increment Count={Count}    //resusing the properties//
         newIncrement={()=>{setCount(Count+1)}}
        />)}
        
    </div>
  );
}

export default Counter;