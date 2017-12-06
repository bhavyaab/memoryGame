'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import { updateGame } from '../../action/game-action.js'
import {renderIf} from '../../lib/util'
import { loadAudio, stopAudio, muteAudio } from '../../action/sound-action.js'

class PlaySound extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
    this.playAudio = this.playAudio.bind(this)
    this.loopAudio = this.loopAudio.bind(this)
    this.stopAudio = this.stopAudio.bind(this)
    this.muteAudio = this.muteAudio.bind(this)
  }

  playAudio(){
    if(this.props.mute) return
    this.props.audio.loop = false
    this.props.audio.play()
  }
  loopAudio(e){
    e.preventDefault()
    if(this.props.mute) return
    this.props.audio.loop = true
    this.props.audio.play()
  }
  volumeControl(e){
    e.preventDefault()
    this.props.audio.volume= 0.5
  }
  stopAudio(e){
    e.preventDefault()
    this.props.audio.pause()
  }
  muteAudio(e){
    e.preventDefault()
    this.props.mute = !this.props.mute
    if(!this.props.mute){
      document.getElementById('soundIcon').src = '../../image/volume-mute.png'
      this.props.audio.play()
    }
    if(this.props.mute)  {
      document.getElementById('soundIcon').src = '../../image/volume-mute2.png'
      this.props.audio.pause()
    }
  }
  componentDidMount() {
    this.audio.volume= this.props.volume
    this.audio.play()
    this.props.loadAudio({'name':this.props.name,'value':this.audio})
  }
  render() {
    return (
      <div className='playSound'>
      <audio ref={(audio) => { this.audio = audio } } preload="auto" >
         <source src={this.props.src}></source>
      </audio>
      </div>
    )
  }
}
const mapStateToProps = (state, props) => {
  return {
    mute: state.sound.mute,
    volume: state.sound.volume,
    audio : state[props.name],
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
    loadAudio: (audio) => dispatch(loadAudio(audio)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(PlaySound)
