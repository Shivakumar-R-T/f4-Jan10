import React from 'react'
import './Input.css'

const Input = (props) => {
  return (
    <div>
     {/*   <input type={props.type} value={props.value} name={props.name} onChange={props.onChange} placeholder={props.placeholder} />   Naive approch */ } 
     <input {...props} />
       
    </div>
  )
}

export default Input