'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {renderIf} from '../../../lib/util'
import { loadAudio, stopAudio, muteAudio } from '../../../action/sound-action.js'

class Audio extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  componentDidMount() {
    this.audio.volume= this.props.volume
    if(!this.props.mute) this.audio.play()
    this.props.loadAudio({'name':this.props.name,'value':this.audio})
  }
  render() {
    return (
      <audio ref={(audio) => { this.audio = audio } } preload="auto" >
         <source src={this.props.src}></source>
      </audio>
    )
  }
}
const mapStateToProps = (state, props) => {
  return {
    mute: state.sound.mute,
    volume: state.sound.volume,
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
    loadAudio: (audio) => dispatch(loadAudio(audio)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Audio)
