import {combineReducers} from 'redux'

import gameReducer from './game.js'
import counterReducer from './counter.js'
import cardReducer from './card.js'
import mouseReducer from './mouse.js'

export default combineReducers({
  game: gameReducer,
  counter: counterReducer,
  card: cardReducer,
  mouse: mouseReducer,
})
