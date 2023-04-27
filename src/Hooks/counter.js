import React, { useState } from 'react';
import Increment from './Increment';

function Counter() {
    const [Count,setCount]=useState(0);
    const newCount = () => {
        setCount(Count + 1);
      };

    
  return (
    <div>
        <Increment Count={Count}
         newIncrement={newCount}
        />
        
    </div>
  );
}

export default Counter;