import React from 'react'
import '../card_list_styles/card.style.css'

export const Card = props =>  (
    <div className='card-container'>
        <h3>{props.reading.dt_txt}</h3>
        <h1>{props.reading.main.temp}</h1>
        <h2>{props.reading.weather[0].description}</h2>
    </div>
)    
