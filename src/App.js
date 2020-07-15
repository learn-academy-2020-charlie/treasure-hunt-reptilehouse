import React, { Component } from 'react'
import Square from './components/Square.js'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?1", "?2", "?3", "?4", "?5", "?6", "?7", "?8", "?9"],
      winningSquareIndex: Math.floor(Math.random() * 9),
      losingSquareIndex: Math.floor(Math.random() * 9),
      counter: 9
    }
  }
  componentDidMount() {
    const { squares, winningSquareIndex, losingSquareIndex } = this.state
    while (winningSquareIndex === losingSquareIndex) {
      let newWinningSquareIndex = Math.floor(Math.random() * 9);
    }
  }
  
  checkBox = (index) => {
    //destructuring
    const { squares, winningSquareIndex, losingSquareIndex, counter } = this.state
    //Handle the counter count
    //make a new variable to store the new count
    let newCounter = counter - 1;
    this.setState({counter: newCounter});
    //Then use setState to update the count.
    //If the cilicked box's index is the same as the winning index
    if (winningSquareIndex === index) {
      //make so game ends and user cannot click anymore
      document.getElementById("board").style.pointerEvents = "none";
      //alter the user that the user has won
      this.alertIndex("You win!!");
      //creating a new version of state array that we can modify
      let newSquares = squares.slice()
      //modifying the new version of the state array
      newSquares[index] = ":moneybag:"
      //setting state of original array with new array
      this.setState({ squares: newSquares })
      
    //Else if the cilicked box's index is the same as the losing index
    } else if (losingSquareIndex === index) {
        //make so game ends and user cannot click anymore
        document.getElementById("board").style.pointerEvents = "none";
        this.alertIndex("You Lose :(");
        //creating a new version of state array that we can modify
        let newSquares = squares.slice()
        //modifying the new version of the state array
        newSquares[index] = "@(-_-)@"
        //setting state of original array with new array
        this.setState({ squares: newSquares })
      
        //Else if the cilicked box's index is the same as the tree index
      } else {
          this.alertIndex("Keep Looking");
          //creating a new version of state array that we can modify
          let newSquares = squares.slice();
          //modifying the new version of the state array
          newSquares[index] = "tree";
          //setting state of original array with new array
          this.setState({ squares: newSquares })
      }
  }

  //you can update the state object but you can never edit the state object
  
  
  alertIndex = (index) => {
    alert(index)
  }

  refreshPage = () => {
    window.location.reload(false);
  }
  
  
  render(){

    let square = this.state.squares.map((value, index) => {
      return (
        <Square 
          value = {value}
          index = {index}
          alertIndex = {this.alertIndex}
          checkBox = {this.checkBox}
        />
      )
    })
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>
        <div id = "board">
          {square}
        </div>
        <div>
          <button class="button" onClick= {this.refreshPage}>Restart Game</button>
        </div>
        <div id = "counter">
          {this.state.counter}
        </div>
      </React.Fragment>
    )
  } //random comment
}
export default App
