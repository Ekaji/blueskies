import React from 'react'
import '../owfont-master/css/owfont-regular.css'
import '../card_list_styles/card.style.css'

export const Card = props =>  (
    
    <div className='card-container'>
        <h3>{props.reading.dt_txt}</h3>
        <i className={`owf owf-${props.reading.weather[0].id} owf-5x`}></i>
        <h1>{Math.round(props.reading.main.temp)}oC</h1>
        <h2>{props.reading.weather[0].description}</h2>
    </div>
)