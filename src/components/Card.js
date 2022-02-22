import React from 'react'

export default function Card(props){

    return(
    <div className='card'>
        <img src={props.img} alt='' className='card--image'/>
        <div className='card--stats'>
            <img src='' alt=''/>
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount}) .</span>
            <span className="gray">{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><b>From {props.price}</b>/ person</p>
    </div>
    )
}