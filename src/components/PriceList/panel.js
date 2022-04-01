import React from 'react'
import Button from '../Button';
import "./price.css"
export default function Panel(props) {
  let { tag } = props;
  let { fields } = tag;
  return (
    <div className='panelContainer'>
      <div className='head'>{fields.title}</div>
      <div className='panelcontainer'>
        <div className='price'>{fields.price} / mo</div>
        <div className='detaillist'>
          {fields.specifications.map((spec,index)=>{
              return <div key={"panel"+index}>{spec}</div>
          })}
        </div>
        <div className='btnContainer'><Button name={fields.button.fields.name} buttonType={fields.button.fields.buttonType} bottonColor={fields.button.fields.buttonColor} textColor={fields.button.fields.textColor}/></div>
      </div>
    </div>
  )
}
