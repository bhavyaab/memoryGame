'use strict'
import React from 'react'
import {connect} from 'react-redux'

import {startGame, updateGame, endGame} from '../../action/game-action.js'

class Landing extends React.Component {
  constructor(props){
    super(props)
    console.log('state :: ', this.state, this.props)
  }
  render(){
    return (
      <section className='landing'>
          <h1>Landing</h1>
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
