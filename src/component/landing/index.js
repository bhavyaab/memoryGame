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
  // <BlockImage />
  // <button onClick={this.handelClick}>Start Game</button>)}
  render(){
    return (
      <section className='landing'>
          <h1>Landing</h1>
          {renderIf(!this.props.game.id,
            <OneImage
              style={{
                top: `22.5%`,
                right: `22.5%`,
                height: '42.5%',
                width: '42.5%',
                position: `absolute`}}
              image={'../../data/star.png'}
              onClick={this.handelClick}
               />)}
          {renderIf(this.props.game.id, <BlockImage />)}
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
