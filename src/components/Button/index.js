import React from 'react'
import "./button.css"
export default function Button(props) {
  return (
    <button className='customButton' style={props.buttonType? props.buttonType == "Bordered" ?{borderColor:props.bottonColor,color:props.bottonColor}:{background:props.bottonColor,borderColor:props.bottonColor,color:props.textColor}:{}}>
        {props.name}
    </button>
  )
}
