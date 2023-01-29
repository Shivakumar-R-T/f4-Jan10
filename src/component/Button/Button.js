import React from 'react'
import './Button.css';

const Button = (props) => {
  return (
    <div>
        <button onClick={props.validationFormData}>{props.label}</button>
    </div>
  )
}

export default Button