import generateCombination from '../lib/gameUtil.js'

let initialState =  {
  score: 0,
  clicked: 0,
  right: 0,
  selected: Math.floor(Math.random() * 3),
  combinationArray: generateCombination(),
}

export default (state=initialState, action) => {
  let {type, payload} = action
  // console.log('__REDUCER__', {...state, ...payload})
  switch (type) {
  case 'START_GAME':
    console.log('new game')
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
