'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'
import BlockImage from '../blockImage'
import PlaySound from '../playSound'

import generateCombination from '../../lib/gameUtil.js'
import {startGame, updateGame, endGame} from '../../action/game-action.js'
import { followMouse } from '../../action/mouse-action.js'
import { stopAudio, mute_Audio, muteAudio } from '../../action/sound-action.js'

class Landing extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    // this.onMouseMove = this.onMouseMove.bind(this)
    this.soundMute = this.soundMute.bind(this)
  }

  handleClick(e){
    e.preventDefault()
    this.props.startGame()
  }
  // onMouseMove(e){
  //   e.preventDefault()
  //   this.props.mouse = {
  //     offsetX: e.nativeEvent.offsetX,
  //     offsetY: e.nativeEvent.offsetY,
  //   }
  //   this.props.followMouse(this.props.mouse)
  // }
  // onMouseMove={this.onMouseMove}
  soundMute(e){
    e.preventDefault()
    let mute = this.props.mute
    console.log(' MUTEEEEEEEEEEEEEEEEEEEE ', mute)
    this.props.muteAudio('audioBackround', mute)
  }
  handleChange(e){
    e.preventDefault()
    console.log(this.props)
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate === ', nextProps, nextState)
  }
  render(){
    return (
      <section className='landing' >
          <div>
          <PlaySound name="audioBackround" src="../../audio/loop.mp3"/>
          <img onClick={this.soundMute} onChange={this.handleChange} src={this.props.src}/>
          <BlockImage onClick={this.handleClick} flip={this.props.start}/>
          </div>
      </section>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    // mouse: state.mouse,
    mute: state.sound.mute,
    src: state.sound.src,
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
    startGame: (game) => dispatch(startGame(game)),
    // followMouse: (mouse) => dispatch(followMouse(mouse)),
    stopAudio: (val) => dispatch(stopAudio(val)),
    muteAudio: (name, mute) => dispatch(muteAudio(name, mute)),
    mute_Audio: (val) => dispatch(mute_Audio(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Landing)
