'use strict'
import React from 'react'
import {connect} from 'react-redux'
import { updateGame } from '../../action/game-action.js'

class Level extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
const mapStateToProps = (state, props) => {
  return {
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProp)(Level)
