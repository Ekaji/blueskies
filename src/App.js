import React, { Component } from 'react';
import './card_list_styles/gridStyle.css'
import {Tempcomp} from './card_components/TempComponent'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
       dailyData: [],
       City: ''
    }
}

componentDidMount () {
  // this.handleSubmit()
  const city = this.state.City
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=abuja&appid=c9864ea908339f90d0b1ad79c454cf80`)
  .then(res => res.json())
  .then(data => { const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
  this.setState({
    fullData : data.list,
    dailyData : dailyData
  }
  )}
) 
}

handleInput = (e) => {
  this.setState({City: e.target.value});
}

handleSubmit = (props) => {
   
}

  render(){
    return (
      <div className="App">
        <h1>Simple Weather App</h1>
          <div>
            <form>
              <label>
              Name:
              <input  onChange={this.handleInput} value={this.state.City} />
              </label> 
              <input type="submit" value="Search" onClick={ this.componentDidMount} />
            </form>
            <div>
            <Tempcomp  dailyData = { this.state.dailyData }/>    
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
//   handleMouse = (e) => {
//     this.setState({ mouseX: e.screenX, mouseY: e.screenY });
//   }
//   render() {
//     return (
//       <div>

//         <input
//           onChange={this.handleInput}  
//           value={this.state.inputText}
//         />

//         <form onSubmit={this.handleSubmit}>  {/* 📥 onsubmit */}
//           <input value={this.state.inputText}/>
//           <button type="submit">submit dis</button>
//         </form>

//       </div>
//     )
//   }
// }

export default App;

