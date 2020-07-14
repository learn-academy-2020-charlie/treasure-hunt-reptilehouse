import React, { Component } from 'react'
import Square from './components/Square.js'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?1", "?2", "?3", "?4", "?5", "?6", "?7", "?8", "?9"],
    }
  }

  changeToTree = (index) => {
    //destructuring
    const { squares } = this.state
    //creating a new version of state array that we can modify
    let newSquares = squares.slice()
    //modifying the new version of the state array
    newSquares[index] =  "tree"
    //["tree", "?2", "?3", "?4", "?5", "?6", "?7", "?8", "?9"]
    //setting state of original array with new array
    this.setState({ squares: newSquares })
  }

  //you can update the state object but you can never edit the state object
  
  
  alertIndex = (index) => {
    alert(index)
  }
  
  render(){
    let square = this.state.squares.map((value, index) => {
      return (
        <Square 
          value = {value}
          index = {index}
          alertIndex = {this.alertIndex}
          changeToTree = {this.changeToTree}
        />
      )
    })
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>
        <div id = "board">
          {square}
        </div>

      </React.Fragment>
    )
  }
}
export default App
