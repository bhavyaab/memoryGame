'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'
import BlockImage from '../blockImage'
import PlaySound from '../playSound'

import generateCombination from '../../lib/gameUtil.js'
import {startGame, updateGame, endGame} from '../../action/game-action.js'
import { followMouse } from '../../action/mouse-action.js'
import { stopAudio, muteAudio } from '../../action/sound-action.js'

class Landing extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    this.handelClick = this.handelClick.bind(this)
    // this.onMouseMove = this.onMouseMove.bind(this)
  }

  handelClick(e){
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
    this.props.stopAudio()
  }
  render(){
    return (
      <section className='landing' >
          <div>
          <PlaySound src="../../audio/loop.mp3"/>
           <BlockImage
            onClick={this.handelClick}
            flip={this.props.start}/>
          </div>
      </section>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    // mouse: state.mouse,
    mute: state.sound.mute,
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
    startGame: (game) => dispatch(startGame(game)),
    // followMouse: (mouse) => dispatch(followMouse(mouse)),
    stopAudio: (audio) => dispatch(stopAudio(audio)),
    muteAudio: (audio) => dispatch(muteAudio(audio)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Landing)
