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
  // {renderIf(!this.props.game.id,<button onClick={this.handelClick}>Start Game</button>)}
  // {renderIf(this.props.game.id, <BlockImage />)}
  render(){
    return (
      <section className='landing'>
          <h1>Landing</h1>
          <BlockImage />
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