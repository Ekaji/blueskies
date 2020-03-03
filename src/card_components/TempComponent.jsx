import React from 'react';
import { Card } from './card.component'


export const Tempcomp = (props) => {
return <div className='grid_cards'>
    {props.dailyData.map((reading,index) => 
         <Card key={index} reading={reading} /> 
          )}
        </div>     
}