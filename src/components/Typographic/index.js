import React from 'react'
import './typo.css'
function typoType(type){
    if(type=="h1"){
      return "headingone"
    }
    else if(type=="div"){
      return "details"
    }
}
export default function Typographic(props) {
  const {typo} = props;
  return (
    <div className='typoGraphic'>
        <div className={typoType(typo.fields.textType)}> 
              {typo.fields.content.content[0].content[0].value}
        </div>
    </div>
  )
}
