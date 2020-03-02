import React from 'react'

export const Tempcomp = (props) => {
return <div className="grid_cards">
    {props.dailyData.map((reading,index) => 
         <h1 key={index}> tem: {reading.main.temp} </h1>)}
        </div>     
}