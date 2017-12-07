'use strict'

export default (state=5, action) => {
  let {type, payload} = action
  switch(type){
  case 'COUNTER_START':
    return state
  case 'COUNTER_UPDATE':
    state = payload
    return state
  case 'COUNTER_ENDS':
    state.val = 0
    return state
  default:
    return state
  }
}
