import React, { Component } from 'react'
import Square from './components/Square.js'
import './App.css'
import { FaTree } from 'react-icons/fa';
import { FaGem } from 'react-icons/fa';
import { FaBomb } from 'react-icons/fa';

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
  
  //create a new method to reload to intial state
  reload = () => {
    const { squares, winningSquareIndex, losingSquareIndex, counter } = this.state
    //create a new variable equaling the same state 
    let newSquares2 = ["?1", "?2", "?3", "?4", "?5", "?6", "?7", "?8", "?9"]
    //reset the state with setState
    this.setState({squares: newSquares2})

    let winningSquareIndex2 = Math.floor(Math.random() * 9)
    this.setState({winningSquareIndex: winningSquareIndex2})

    let losingSquareIndex2 = Math.floor(Math.random() * 9)
    this.setState({losingSquareIndex: losingSquareIndex2})

    let counter2 = 9
    this.setState({counter: counter2})

    this.componentDidMount()

    document.getElementById("board").style.pointerEvents = "auto";
  }

  //call compononent did mount in this method
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
      newSquares[index] = <FaGem /> 
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
        newSquares[index] = <FaBomb /> 
        //setting state of original array with new array
        this.setState({ squares: newSquares })
      
        //Else if the cilicked box's index is the same as the tree index
      } else {
          this.alertIndex("Keep Looking");
          //creating a new version of state array that we can modify
          let newSquares = squares.slice();
          //modifying the new version of the state array
          newSquares[index] = <FaTree /> ;
          //setting state of original array with new array
          this.setState({ squares: newSquares })
      }
  }

  //you can update the state object but you can never edit the state object
  
  
  alertIndex = (index) => {
    alert(index)
  }

  
  
  render(){
    
    // const refreshPage = () => {
    //   window.location.reload(true);
    // }

    let square = this.state.squares.map((value, index) => {
      return (
        <Square 
          value = {value}
          index = {index}
          key = { index }
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
          <button className="button" onClick= {this.reload}>Restart Game</button>
        </div>
        <div id = "counter">
          {this.state.counter}
        </div>
      </React.Fragment>
    )
  } //random comment
}
export default App
