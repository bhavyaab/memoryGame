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
    state = 'endCounter'
    return state
  default:
    return state
  }
}
