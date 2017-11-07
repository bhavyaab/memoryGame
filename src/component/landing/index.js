'use strict'
import React from 'react'
import {connect} from 'react-redux'

import {startGame, updateGame, endGame} from '../../action/game-action.js'

class Landing extends React.Component {
  constructor(props){
    super(props)
    console.log('state :: ', this.state, this.props)
    this.handelClick = this.handelClick.bind(this)
  }
  game = {
    score: 0,
    clicked: 0,
    right: 0,
  }
  handelClick(e){
    e.preventDefault()
    this.props.startGame(this.game)
    console.log('Button have beeen clicked:  ', this.state)
  }

  render(){
    return (
      <section className='landing'>
          <h1>Landing</h1>
          <button onClick={this.handelClick}>Start Game</button>
      </section>
    )
  }
}


const mapStateToProps = (state) => {
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
