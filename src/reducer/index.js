import {combineReducers} from 'redux'

import gameReducer from './game.js'
import counterReducer from './counter.js'

export default combineReducers({
  game: gameReducer,
  counter: counterReducer,
})
