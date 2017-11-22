'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'
import BlockImage from '../blockImage'
import OneImage from '../oneImage'

import generateCombination from '../../lib/gameUtil.js'
import {startGame, updateGame, endGame} from '../../action/game-action.js'

class Landing extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    this.props.start = false
    this.props.game.id?  this.props.start = true: this.props.startGame()
    this.handelClick = this.handelClick.bind(this)
  }

  handelClick(e){
    e.preventDefault()
    this.props.start = true
    this.props.startGame()
  }
  render(){
    return (
      <section className='landing'>
          <h1>Landing</h1>
          <div>
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
    game: state.game,
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
    startGame: (game) => dispatch(startGame(game)),
    updateGame: (game) => dispatch(updateGame(game)),
    endGame: (game) => dispatch(endGame(game)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Landing)
