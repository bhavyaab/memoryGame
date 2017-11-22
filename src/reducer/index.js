import {combineReducers} from 'redux'

import gameReducer from './game.js'
import counterReducer from './counter.js'
import cardReducer from './card.js'

export default combineReducers({
  game: gameReducer,
  counter: counterReducer,
  card: cardReducer,
})
