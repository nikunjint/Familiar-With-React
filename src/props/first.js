import React from 'react'

function First(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img className="first_name"
      src={props.src}
      width={props.w}
      height={props.h}/>
    </div>
  )
}

export default First;