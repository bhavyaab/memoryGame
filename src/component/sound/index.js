'use strict'
import React from 'react'
import {connect} from 'react-redux'
import Audio from './audio'

class Sound extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  // <Audio name="audioBackround"  src="../../audio/loop.mp3"/>
  render() {
    return (
      <div className="sound">
        <Audio name="clickSound" src="../../audio/click.mp3"/>
        <Audio name="wrongClickSound" src="../../audio/cuak.mp3"/>
        <Audio name="rightClickSound" src="../../audio/cuak.mp3"/>
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

export default connect(mapStateToProps, mapDispatchToProp)(Sound)
