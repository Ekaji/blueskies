import React, { Component } from 'react';
import './card_list_styles/gridStyle.css'
import {Tempcomp} from './card_components/TempComponent'
import apiConfig from './apiKey'
import './App.css';
import {Loading} from './loading_components/loading_comp'

class App extends Component{
  constructor(){
    super();
    this.state = {
       dailyData: [],
       currCity: '',
       loading: false,
    }
}
   

handleInput = (e) => {
  this.setState({currCity: e.target.value})
  }

 handleSubmit = (e) => {
   //prevents the form from submitting
   e.preventDefault();
   //used template literals to pass dynamic arguements to the api
   this.setState({loading: true})
  fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${this.state.currCity}&appid=${apiConfig.openWeatherKey}`)
  .then(res => res.json())
  .then(data => { const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
  this.setState({
    fullData : data.list,
    dailyData : dailyData,
    loading : false
  }
  )}
) 
}

  render(){
    const {loading, dailyData } = this.state
    return (
      <div className="App App_background" >
          <h1 className='indie' >Blue Skies</h1>
          <h3 className='indie' >city:{this.state.currCity}</h3>

            <form className='Form_box' onSubmit={this.handleSubmit}> 
              <div className='formDiv'>
                <input className='form_input' placeholder='search city' type='search' onChange={this.handleInput} value={this.state.currCity} />
              </div>
              <div className='formDiv'>
                <input className='form_button' type="submit" />
              </div>   
            </form>
      
        <div>
          { loading? <Loading  /> : <Tempcomp dailyData = { dailyData } /> }
        </div>

      </div>
    );
  }
}



export default App;

