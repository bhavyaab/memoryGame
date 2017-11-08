'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'
import {BlockImage} from '../blockImage'
import {OneImage} from '../oneImage'

import {startGame, updateGame, endGame} from '../../action/game-action.js'

class Landing extends React.Component {
  constructor(props){
    super(props)
    this.handelClick = this.handelClick.bind(this)
    this.state = {}
  }
  handelClick(e){
    e.preventDefault()
    this.props.startGame(this.props.game)
    this.props.start = true
  }
  componentDidUpdate(){
    console.log('componentDidUpdate()  #################', this.props.game)
  }
  render(){
    return (
      <section className='landing'>
          <h1>Landing</h1>
          {renderIf(!this.props.game.id,<button onClick={this.handelClick}>Start Game</button>)}
          {renderIf(this.props.game.id, <BlockImage app={this.state}/>)}
      </section>
    )
  }
}


const mapStateToProps = (state, props) => {
  console.log('mapStateToProps:  ', state)
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
