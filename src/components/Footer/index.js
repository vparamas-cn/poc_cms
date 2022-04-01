import React, { useEffect } from 'react'
import './footer.css'
export default function Footer(props) {
    let { footer } = props;
    footer = footer[0];
    if (footer)
        return (
            <React.Fragment>
            <div className='linedivder'></div>
            <div className='footerContainer'>
                <div className='logoContainer'>
                    <img src={"https:" + footer.fields.icon.fields.file.url} />
                    <div>{footer.fields.copyRights}</div>
                </div>
                <div className='linkContainer'>
                    {footer.fields?.footerList.map((list, index) => {
                        return <div key={index}>
                            <div className='heading'>{list.fields.title}</div>
                            {list.fields.footerLink.map((link, index2) => {
                                return <div className='linktext' key={`${index} "_" ${index2}`}>
                                    {link}
                                </div>
                            })}
                        </div>

                    })}

                </div>
            </div>
            </React.Fragment>
        )
    else
        return null
}
