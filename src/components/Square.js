import React, { Component } from 'react'

class Square extends Component{
  render(){
    return(
      <React.Fragment>
        <div id = "box"
          style = {{width: "100px", height: "100px", border: "2px solid green"}}>
          <div id = "box-text">
            {this.props.value}
          </div>  
        </div>
      </React.Fragment>
    )
  }
}
export default Square
