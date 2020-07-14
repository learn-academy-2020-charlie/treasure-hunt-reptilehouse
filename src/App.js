import React, { Component } from 'react'
import Square from './components/Square.js'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?1", "?2", "?3", "?4", "?5", "?6", "?7", "?8", "?9"]
    }
  }

  render(){
    let square = this.state.squares.map((value, index) => {
      return (
        <Square 
          value = {value}
          index = {index}
        />
      )
    })
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>
        <div id = "board">
          {square};
        </div>

      </React.Fragment>
    )
  }
}
export default App
