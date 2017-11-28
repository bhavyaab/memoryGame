import React from 'react'
import {connect} from 'react-redux'
import { updateGame } from '../../action/game-action.js'

class Message extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <div className="cover">
      <ul className="over"
      onClick={this.props.onClick}>
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
  return {}
}

export default connect(mapStateToProps, mapDispatchToProp)(Message)
