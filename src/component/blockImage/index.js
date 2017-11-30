import React from 'react'
import ReactDom from 'react-dom'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'
import OneImage from '../oneImage'
import Counter from '../counter'
import Message from '../message'

import { cardStart, cardLookup } from '../../action/card-action.js'
import {startMe, updateMe, gameReset } from '../../action/game-action.js'
// import { followMouse } from '../../action/mouse-action.js'

class BlockImage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      backCardImage: '../../image/cardBack.jpg',
      centerImage: '../../image/start.png',
      images : ['../../image/apple.jpg','../../image/book.jpg','../../image/flower.jpg','../../image/tiger.jpg'],
    }
    this.startThisGame = this.startThisGame.bind(this)
    this.updateThisGame = this.updateThisGame.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.resetAll = this.resetAll.bind(this)
    this.eyeMove = this.eyeMove.bind(this)
  }
  startThisGame(e){
    e.preventDefault()
    this.props.startGame(this.props.game, this.props.card)
  }
  updateThisGame(picked, e){
    e.preventDefault()
    if( (this.props.lookup[e.target.id]) || (e.target.id == '') ) return this.props.lookup
    this.props.cardLookup(e.target.id)
    e.target.parentNode.parentNode.classList = 'flipper flip'
    this.props.updateGame(this.props.game, picked)
  }
  handleChange(e){
    this.props.updateGame(this.props.game)
  }
  resetAll(e){
    e.preventDefault()
    this.props.gameReset()
  }
  eyeMove(e){
    e.preventDefault()
    this.props.mouse = {
      offsetX: e.nativeEvent.offsetX,
      offsetY: e.nativeEvent.offsetY,
    }
    this.props.followMouse(this.props.mouse)
  }
  render(){
    var allImage = []
    var combinationArray = this.props.game.combinationArray
    var count = 0
    var element, classes, z
    for(var i = 0; i < 4; i++){
      for(var j = 0; j < 4; j ++){
        if(!(((i == 1) && (j == 1)) ||
            ((i == 1) && (j == 2)) ||
            ((i == 2) && (j == 1)) ||
            ((i == 2) && (j == 2)))){
          element =<OneImage
            style={{
              top: `${i * 22.5}%`,
              left: `${j * 22.5}%`,
            }}
            id={ i + '' + j }
            notCenter='true'
            classes={!this.props.card.flip? 'flipper flip':'flipper'}
            frontImage={this.state.backCardImage}
            backImage={this.state.images[combinationArray[count]]}
            onChange={this.handleChange}
            onClick={this.updateThisGame.bind(this, combinationArray[count])}
            />
          allImage[count] = element
          count++
        }
      }
    }
    var styleCenter = {
      top: `25.5%`,
      left: `25.5%`,
      height: '48%',
      width: '48%',
      border: 'none',
    }
    return (
      <div className="blockImage" >
        {allImage}
        {renderIf(this.props.card.counterOn,
          <div className={(this.props.counter > 0)? 'cover':'cover Z'}>
          <OneImage
          style={styleCenter}
          id={combinationArray[count]}
          classes={classes = !this.props.card.center? 'flipper flip':'flipper'}
          frontImage={this.state.centerImage}
          backImage={this.state.images[this.props.game.selected]}
          onClick={this.startThisGame}
          onChange={this.handleChange}
          /></div>)}
          {this.props.counter == 1? this.props.cardStart(this.props.card):console.log()}
          {renderIf(!this.props.card.counterOn, <Counter style={styleCenter}/>)}
          {renderIf((this.props.game.clicked > 3),
            <Message message="Game Over!!"
                      style={styleCenter}
                      action={{message: 'click to restart!'}}
                      onClick={this.resetAll}
                      onChange={this.handleChange}
                      />)}
      </div>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    game: state.game,
    counter: state.counter,
    card: state.card,
    lookup: state.card.lookup,
    mouse: state.mouse,
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
    startGame: (game, card) => dispatch(startMe(game, card)),
    updateGame: (game, picked) => dispatch(updateMe(game, picked)),
    gameReset: (game) => dispatch(gameReset(game)),
    cardStart: (card) => dispatch(cardStart(card)),
    cardLookup: (id) => dispatch(cardLookup(id)),
    // followMouse: (offsetX, offsetY) => dispatch(followMouse(offsetX, offsetY)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(BlockImage)
