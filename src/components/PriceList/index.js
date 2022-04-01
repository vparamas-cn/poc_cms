import React from 'react'
import Panel from "./panel"
export default function PriceList(props) {
  let { pricelist } = props;
  return (
    <div className='pricelist'>
      {pricelist && pricelist.fields.panelList.map((list,index)=>{
        return <Panel key={"price"+index} tag={list}/>
      })}
    </div>
  )
}
