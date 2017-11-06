'use strict'
import React from 'react'
import {connect} from 'react-redux'

import {startGame, updateGame, endGame} from '../../action/game-action.js'

class Landing extends React.Component{
  constructor(){
    super()
    console.log('state :: ', this.state)
  }
  render(){
    <section className='landing'>
        <h1>Landing</h1>
    </section>
  }
}


const mapStateToProps = (state) => {
  return {
    game: state.game,
  }
}
