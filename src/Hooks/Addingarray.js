import React from 'react';
import { useState } from 'react';

let nextid = 0;
function Addingarray() {
  const [name,setName]=useState('');
  const [bands,setBands]=useState([]);
  return (
    <div>
      <h1>Lists</h1>
      <input value={name} onChange={e=>setName(e.target.value)}></input>
      <button onClick={()=>{
        setBands([ ...bands,{id: nextid++, name : name}]);
        setName('');
      
       
      }}>Click</button>
      <ul style={{color:'black'}}>
        {bands.map((band)=>(
          <li key={band.id}>{band.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Addingarray