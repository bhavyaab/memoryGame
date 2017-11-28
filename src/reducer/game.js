import generateCombination from '../lib/gameUtil.js'
import Game from '../lib/gameUtil.js'
import uuid from 'uuid/v1'

let initialState =  {
  score: 0,
  clicked: 0,
  right: 0,
  wrong: 0,
  selected: 0,
  combinationArray: [],
}

export default (state=initialState, action) => {
  let {type, payload} = action
  switch (type) {
  case 'START_GAME':
    state.id = uuid()
    state.selected =  Math.floor(Math.random() * 3)
    state.combinationArray = generateCombination()
    return {...state, ...payload}
  case 'UPDATE_GAME':
    state = payload
    return {...state}
  case 'END_GAME':
    state = initialState 
    return {...state}
  default:
    return state
  }
}
