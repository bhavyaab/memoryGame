import React from 'react'
import {connect} from 'react-redux'
import { gameReset } from '../../action/game-action.js'

class Message extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    e.preventDefault()
    console.log('log me clicked')
    this.props.gameReset()
  }
  render() {
    return (
      <div className="cover">
      <ul className="over"
      onClick={this.handelClick}>
        <li>{this.props.message}</li>
          <li style={{cursor: 'pointer'}} >{this.props.action.message}</li>
      </ul>
      </div>
    )
  }
}
const mapStateToProps = (state, props) => {
  return {
    game: state.game,
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
    gameReset: (game) => dispatch(gameReset(game)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Message)
