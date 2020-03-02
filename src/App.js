import React, { Component } from 'react';
import './card_list_styles/gridStyle.css'
import {Tempcomp} from './card_components/TempComponent'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
       dailyData: [],
       City: ''
    }
}
   

handleInput = (e) => {
  this.setState({City: e.target.value})
  }

 handleSubmit = (e) => {
   e.preventDefault()
console.log(this.state.City)
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.City}&appid=c9864ea908339f90d0b1ad79c454cf80`)
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
    <h2>city:{this.state.City}</h2>
          <div>

            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleInput} value={this.state.City} /> 
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

// class App extends Component {
//   state = {
//     inputText: '',
//     mouseX: 0,
//     mouseY: 0    
//   }
//   handleInput = (e) => {
//     this.setState({inputText: e.target.value});
//   }
//   handleSubmit = () => {
//     alert(`Quoteth Shakespeare, "You cad! ${this.state.inputText}"`);
//   }
 
//   render() {
//     return (
//       <div>

//         {/* <input
//           onChange={this.handleInput}  
//           value={this.state.inputText}
//         /> */}

//         <form onSubmit={console.log(this.state.inputText) }>  {/* 📥 onsubmit */}
//           <input onChange={this.handleInput.bind(this)} value={this.state.inputText}/>
//           <button type="submit">submit dis</button>
//         </form>

//       </div>
//     )
//   }
// }

export default App;

