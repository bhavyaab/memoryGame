'use strict';

let initialState = {
  flip:"false",
  center: 'true',
  counterOn: 'false'
}

export default (state=initialState, action) => {
  let {type, payload} = action
  // let {flip , center, counterOn} = state
  console.log(type,  ' ========  ', state, payload)
  switch(type){
    case 'CARD_START':
       state.flip = !state.flip
       state.counterOn = !state.counterOn
        return state
    case 'CARD_FLIP':
       state[payload]? state[payload] = !state[payload]:state
       return state
    case 'CARD_TOGGLE':
       state.flip = !state.flip
       state.center = !state.center
       state.counterOn = !state.counterOn
       return state
    default:
       return state
  }
}
