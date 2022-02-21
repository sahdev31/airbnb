import React from 'react'

export default function Contact(info){
    const {name,img,email,mobile} = info
    return(
    <div className="contact-card">
        <img src="./images/mr-whiskerson.png"/>
        <h3>{name}</h3>
        <div className="info-group">
        <img src={img} />
            <p>{mobile}</p>
        </div>
        <div className="info-group">
            <img src={img} />
            <p>{email}</p>
        </div>
    </div>
    )
}