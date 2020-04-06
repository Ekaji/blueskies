import React from 'react'
import '../owfont-master/css/owfont-regular.css'
import '../card_list_styles/card.style.css'
import moment from 'moment'

export const Card = (props) =>  {
    const date = moment(props.reading.dt_txt);
    return(
    <div className='card-container'>
        <h2>{date.format('dddd')}</h2>
        <h3>{date.format('MMM-DD-YYYY')}</h3>
        <i className={`owf owf-${props.reading.weather[0].id} owf-5x`}></i>
        <h1>{Math.round((props.reading.main.temp)-273.15)}°c</h1>
        <h2>{props.reading.weather[0].description}</h2>
    </div>
    )
}