import {combineReducers} from 'redux'

import gameReducer from './game.js'
import cardReducer from './card.js'
import mouseReducer from './mouse.js'
import soundReducer from './sound.js'
import counterReducer from './counter.js'

export default combineReducers({
  game: gameReducer,
  counter: counterReducer,
  card: cardReducer,
  mouse: mouseReducer,
  sound: soundReducer,
})
