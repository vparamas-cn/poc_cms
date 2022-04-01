import React from 'react'
import Button from '../Button';
import "./header.css";

function Header(props) {
  const {header} = props;
  return (
    <div className='headerContainer'>
        <div>
            <span>{header.title}</span>
        </div>
        <div className='linkContainer'>
            {
                header.links.map((item,index)=>{
                    return <a key={index} href={item.fields.url}>{item.fields.title}</a>
                })
            }
            {header.signUp && <Button name={"Sign Up"} />}
        </div>
    </div>
  )
}

export default React.memo(Header);
