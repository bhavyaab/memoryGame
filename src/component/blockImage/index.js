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
    this.props.flip = "flipper";
    this.startThisGame = this.startThisGame.bind(this)
    this.updateThisGame = this.updateThisGame.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // setTimeout(() =>{this.setState({timePassed: true})}, 1000);
  startThisGame(e){
    e.preventDefault()
    e.target.parentNode.parentNode.className = 'flipper flip'
    var allImage = document.getElementsByClassName('allImage')[0]
    console.log('ALLIMAGE ===', allImage);
  }
  updateThisGame(e){
    e.preventDefault()
    e.target.parentNode.parentNode.className = 'flipper flip'
    this.props.game.clicked++;
    this.props.updateGame(this.props.game);
  }
  handleChange(e){
    console.log('onchange = ', this.props);
  }
  render(){
    var allImage = []
    var combinationArray = this.props.game.combinationArray
    var count = 0
    var element
    for(var i = 0; i < 4; i++){
      for(var j = 0; j < 4; j ++){
        if(!(((i == 1) && (j == 1)) || ((i == 1) && (j == 2)) || ((i == 2) && (j == 1)) || ((i == 2) && (j == 2)))){
          element = <OneImage
            id={combinationArray[count]}
            style={{
              top: `${i * 22.5}%`,
              right: `${j * 22.5}%`,
              position: `absolute`}}
            flip={this.props.flip}
            frontImage={this.state.backCardImage}
            backImage={this.state.images[combinationArray[count]]}
            onChange={this.handleChange}
            onClick={this.updateThisGame}
            />
          allImage[count] = element
          count++
        }
      }
    }
    return (
      <div className="blockImage">
      <div className="allImage">
        {allImage}
      </div>
        <OneImage
          id={combinationArray[count]}
          style={{
            top: `22.5%`,
            right: `22.5%`,
            height: '42.5%',
            width: '42.5%',
            position: `absolute`,
            border: 'none'}}
          flip={this.props.flip}
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
    start: state.game.id? true:false
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
    startGame: (game) => dispatch(startGame(game)),
    updateGame: (game) => dispatch(updateGame(game)),
    endGame: (game) => dispatch(endGame(game)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(BlockImage)
