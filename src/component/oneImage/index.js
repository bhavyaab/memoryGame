
import React from 'react'
import {connect} from 'react-redux'
import {startGame, updateGame, endGame} from '../../action/game-action.js'


class OneImage extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (
       <div style={this.props.style}
       className="oneImage flip-container">
         <div className={this.props.classes}
         onClick={this.props.onClick}
         onChange={this.props.onChange}>
        		<div className="front">
              <img src={this.props.frontImage}/>
        		</div>
        		<div className="back">
              <img src={this.props.backImage}/>
        		</div>
         </div >
       </div>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    classes: props.classes,
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
    startGame: (game) => dispatch(startGame(game)),
    updateGame: (game) => dispatch(updateGame(game)),
    endGame: (game) => dispatch(endGame(game)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(OneImage)
