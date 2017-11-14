import React from 'react'
import {connect} from 'react-redux'
import OneImage from '../oneImage'

// import generateCombination from '../../lib/gameUtil.js'
import {startGame, updateGame, endGame} from '../../action/game-action.js'

class BlockImage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      backCardImage: '../../data/cardBack.jpg',
      centerImage: '../../data/start.png',
      images : ['../../data/apple.jpg', '../../data/book.jpg', '../../data/flower.jpg', '../../data/tiger.jpg'],
    }
    props.flip = "false";
    this.startThisGame = this.startThisGame.bind(this)
    this.updateThisGame = this.updateThisGame.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  startThisGame(e){
    e.preventDefault()
    this.props.flip = !this.props.flip
    this.props.updateGame(this.props.game);
  }
  updateThisGame(picked, e){
    e.preventDefault()
    if(picked == this.props.game.selected) this.props.game.right++
    this.props.game.clicked++;
    if((this.props.game.clicked > 3) || (this.props.game.right == 3)) return this.props.endGame()
    e.target.parentNode.parentNode.classList = "flipper flip"
    this.props.updateGame(this.props.game)
  }
  handleChange(e){
   this.props.updateGame(this.props.game);
  }
  render(){
    var allImage = []
    var combinationArray = this.props.game.combinationArray
    var count = 0
    var element, classes
    for(var i = 0; i < 4; i++){
      for(var j = 0; j < 4; j ++){
        if(!(((i == 1) && (j == 1)) || ((i == 1) && (j == 2)) || ((i == 2) && (j == 1)) || ((i == 2) && (j == 2)))){
          element = <OneImage
            style={{
              top: `${i * 22.5}%`,
              right: `${j * 22.5}%`,
              position: `absolute`}}
            classes={classes = this.props.flip? "flipper flip":"flipper"}
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
    return (
      <div className="blockImage">
        {allImage}
        <OneImage
          id={combinationArray[count]}
          style={{
            top: `22.5%`,
            right: `22.5%`,
            height: '42.5%',
            width: '42.5%',
            position: `absolute`,
            border: 'none'}}
          classes={classes = !this.props.flip? "flipper flip":"flipper"}
          frontImage={this.state.centerImage}
          backImage={this.state.images[combinationArray[this.props.game.selected]]}
          onClick={this.startThisGame}
          onChange={this.handleChange}
          />
      </div>
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
    updateGame: (game) => dispatch(updateGame(game)),
    endGame: (game) => dispatch(endGame(game)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(BlockImage)
