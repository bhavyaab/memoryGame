'use strict';

export default (state=5, action) => {
  let {type, payload} = action
  // console.log('Counter update ;; ', state, payload)
  switch(type){
    case 'COUNTER_START':
        return state
    case 'COUNTER_UPDATE':
       state > 0? state = state - 1: state = 0;
       return state
    case 'COUNTER_ENDS':
       return 0
    default:
       return state
  }
}
