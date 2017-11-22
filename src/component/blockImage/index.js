import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'
import OneImage from '../oneImage'
import Counter from '../counter'

// import { updateCounter} from '../../action/counter-action.js'
import { cardStart, cardFlip, cardToggle} from '../../action/card-action.js'
import {startMe, startGame, updateGame, endGame} from '../../action/game-action.js'

class BlockImage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      backCardImage: '../../data/cardBack.jpg',
      centerImage: '../../data/start.png',
      images : ['../../data/apple.jpg','../../data/book.jpg','../../data/flower.jpg','../../data/tiger.jpg'],
    }
    this.startThisGame = this.startThisGame.bind(this)
    this.updateThisGame = this.updateThisGame.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  startThisGame(e){
    e.preventDefault()
    this.props.startGame(this.props.game, this.props.card)
  }
  updateThisGame(picked, e){
    e.preventDefault()
    if(picked == this.props.game.selected) this.props.game.right++
    e.target.parentNode.parentNode.classList = "flipper flip"
    this.props.game.clicked++;
    this.props.updateGame(this.props.game)
    if((this.props.game.clicked > 3) || (this.props.game.right == 3)) return this.props.endGame()
  }
  handleChange(e){
   this.props.updateGame(this.props.game)
  }
  render(){
    var allImage = []
    var combinationArray = this.props.game.combinationArray
    var count = 0
    var element, classes
    for(var i = 0; i < 4; i++){
      for(var j = 0; j < 4; j ++){
        if(!(((i == 1) && (j == 1)) ||
            ((i == 1) && (j == 2)) ||
            ((i == 2) && (j == 1)) ||
            ((i == 2) && (j == 2)))){
          element = <OneImage
            style={{
              top: `${i * 22.5}%`,
              right: `${j * 22.5}%`,
              position: `absolute`}}
            classes={classes = !this.props.card.flip? "flipper flip":"flipper"}
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
      top: `22.5%`,
      right: `22.5%`,
      height: '42.5%',
      width: '42.5%',
      position: `absolute`,
      border: 'none'}
    return (
      <div className="blockImage">
        {allImage}
        {renderIf(this.props.card.counterOn, <OneImage
          id={combinationArray[count]}
          style={styleCenter}
          classes={classes = !this.props.card.center? "flipper flip":"flipper"}
          frontImage={this.state.centerImage}
          backImage={this.state.images[this.props.game.selected]}
          onClick={this.startThisGame}
          onChange={this.handleChange}
          />)}
          {this.props.counter == 1? this.props.cardStart(this.props.card):console.log('counter = ', this.props.counter)}
          {renderIf(!this.props.card.counterOn, <Counter style={styleCenter}/>)
          }
      </div>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    game: state.game,
    counter: state.counter,
    card: state.card
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
    startGame: (game, card) => dispatch(startMe(game, card)),
    updateGame: (game) => dispatch(updateGame(game)),
    endGame: (game) => dispatch(endGame(game)),
    updateCounter: (counter) => dispatch( updateCounter(counter)),
    cardStart: (card) => dispatch(cardStart(card)),
    cardToggle: (card) => dispatch(cardToggle(card)),
    cardFlip: (card) => dispatch(cardFlip(card)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(BlockImage)
