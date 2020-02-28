import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      curWeather: []
    }
  }

  componentDidMount(){
    //use template string to get city
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Abuja&appid=c9864ea908339f90d0b1ad79c454cf80')
      .then(res => res.json())
      .then(data => console.log(data))
  }



  render(){
    return (
      <div className="App">
        <h1>Simple Weather App</h1>
          <div>
           <input type="search" />
           <button>Search</button>
          </div>
      </div>
    );
  }
}

export default App;

