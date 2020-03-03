import React, { Component } from 'react';
import './card_list_styles/gridStyle.css'
import {Tempcomp} from './card_components/TempComponent'
import apiConfig from './apiKey'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
       dailyData: [],
       currCity: ''
    }
}
   

handleInput = (e) => {
  this.setState({currCity: e.target.value})
  }

 handleSubmit = (e) => {
   //prevents the form from submitting
   e.preventDefault();
   //used template literals to pass dynamic arguements to the api
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.currCity}&appid=${apiConfig.openWeatherKey}`)
  .then(res => res.json())
  .then(data => { const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
  this.setState({
    fullData : data.list,
    dailyData : dailyData
  }
  )}
) 
}

  render(){
    return (
      <div className="App">
        <h1>Simple Weather App</h1>
    <h2>city:{this.state.currCity}</h2>
          <div  >

            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleInput} value={this.state.currCity} /> 
              <button type="submit" >submit</button>
            </form>

            <div>
            <Tempcomp  dailyData = { this.state.dailyData }>
              </Tempcomp>    
            </div>
          </div>
      </div>
    );
  }
}



export default App;

