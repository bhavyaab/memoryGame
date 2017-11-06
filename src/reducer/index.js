import {combineReducers} from 'redux'

import gameReducer from './game.js'

export default combineReducers({
  game: gameReducer,
})
