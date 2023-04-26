import React, { useState } from 'react';
let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ];
  

function DeletingArray() {
    const [artists,setArtists] =useState(initialArtists)
  return (
    <div>
        <h1>Delete the array</h1>
        <ul style={{color:'black'}}>
            {artists.map((item)=>(
                <li key={item.id}>{item.name}{''}    
                <button onClick={()=>{
                    setArtists(artists.filter((items)=> items.id !== item.id));
                }}>Delete</button></li>
            ))}
        </ul>
    </div>
  )
}

export default DeletingArray