import React, { Component } from 'react'

class Square extends Component{
  
  handleClick = () => {
    this.props.alertIndex(this.props.index)
  }
  
  handleClick2 = () => {
    this.props.changeToTree(this.props.index)
  }

  render(){
    return(
      <React.Fragment>
        <div id = "box"
          style = {{width: "100px", height: "100px", border: "2px solid green"}}
          onClick = {this.handleClick, this.handleClick2}
          >
          <div id = "box-text">
            {this.props.value}
          </div>  

        </div>
      </React.Fragment>
    )
  }
}
export default Square
