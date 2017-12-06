'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'
import BlockImage from '../blockImage'
import Sound from '../sound'

import generateCombination from '../../lib/gameUtil.js'
import {startGame, updateGame, endGame} from '../../action/game-action.js'
import { followMouse } from '../../action/mouse-action.js'
import { mute_Audio, updateSound } from '../../action/sound-action.js'

class Landing extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
    // this.onMouseMove = this.onMouseMove.bind(this)
    this.soundMute = this.soundMute.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(e){
    e.preventDefault()
    this.props.startGame()
  }
  handleChange(e){
    this.props.updateSound(this.props.sound)
    console.log(' state src ', this.state.src)
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
    this.props.mute_Audio(this.props.sound)
    console.log(' sound ', this.props.sound)
  }
  render(){
    return (
      <section className='landing'>
          <div>
          <Sound />
          <img style={{'marginLeft': '50%'}}
           onClick={this.soundMute}
           onChange={this.handleChange}
           src={this.props.sound.muteImage}/>
          <BlockImage onClick={this.handleClick} flip={this.props.start}/>
          </div>
      </section>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    // mouse: state.mouse,
    sound: state.sound,
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
    startGame: (game) => dispatch(startGame(game)),
    // followMouse: (mouse) => dispatch(followMouse(mouse)),
    mute_Audio: (sound) => dispatch(mute_Audio(sound)),
    updateSound: (sound) => dispatch(updateSound(sound)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Landing)
