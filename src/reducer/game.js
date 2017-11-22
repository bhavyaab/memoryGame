import generateCombination from '../lib/gameUtil.js'
import Game from '../lib/gameUtil.js'

let initialState =  {
  score: 0,
  clicked: 0,
  right: 0,
  selected: 0,
  combinationArray: [],
}

export default (state=initialState, action) => {
  let {type, payload} = action
  // console.log(type,  ' ========  ', state, payload)
  switch (type) {
  case 'START_GAME':
    state.selected =  Math.floor(Math.random() * 3)
    state.combinationArray = generateCombination()
    return {...state, ...payload}
  case 'UPDATE_GAME':
    return {...state, payload}
  case 'END_GAME':
    state = initialState
    return {...state, payload}
  default:
    return state
  }
}
