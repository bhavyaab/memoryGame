'use strict'

let initialState = {
  flip:'false',
  center: 'true',
  counterOn: 'false',
  gameOver: 'false',
  lookup: {},
}

export default (state=initialState, action) => {
  let {type, payload} = action
  switch(type){
  case 'CARD_START':
    state.flip = !state.flip
    state.counterOn = !state.counterOn
    return state
  case 'CARD_FLIP':
    state[payload]? state[payload] = !state[payload]:state[payload]
    return state
  case 'CARD_TOGGLE':
    state.flip = !state.flip
    state.center = !state.center
    state.counterOn = !state.counterOn
    return state
  case 'CARD_LOOKUP':
    state.lookup[payload] = true
    return state
  case 'CARD_END':
    state.flip = !state.flip
    state.gameOver = !state.gameOver
    return state
  case 'CARD_RESET':
    state = {
      flip:'true',
      center: 'false',
      counterOn: 'true',
      gameOver: 'true',
      lookup: {},
    }
    return state
  default:
    return state
  }
}
