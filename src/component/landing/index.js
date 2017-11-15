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
    // console.log('LANDING PROPS', props);
    super(props)
    this.state = {}
    this.props.start = false
    this.handelClick = this.handelClick.bind(this)
  }

  handelClick(e){
    e.preventDefault()
    this.props.start = true
    this.props.game.selected = Math.floor(Math.random() * 3)
    this.props.game.combinationArray = generateCombination()
    this.props.startGame(this.props.game)
    console.log('game start ', this.props.game)
  }

  // <BlockImage />
  // <button onClick={this.handelClick}>Start Game</button>)}
  render(){
    return (
      <section className='landing'>
          <h1>Landing</h1>
          <div>
          {renderIf(!this.props.game.id,
            <OneImage
              style={{
                top: `22.5%`,
                right: `22.5%`,
                height: '42.5%',
                width: '42.5%',
                position: `absolute`,
                border: 'none'}}
                flip="flipper"
              frontImage={'../../data/star.png'}
              onClick={this.handelClick}
               />)}
          {renderIf(this.props.game.id,
            <BlockImage
            onClick={this.handelClick}
            flip={this.props.start}/>)}
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
