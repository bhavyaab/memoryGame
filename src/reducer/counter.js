'use strict';

export default (state=15, action) => {
  let {type, payload} = action
  console.log('Counter update ;; ', state, action)
  switch(type){
    // case: COUNTER_START:
    //     return state
    case: 'COUNTER_UPDATE':
       return state
    // case 'COUNTER_ENDS':
    //    return 0
    default:
       return state
  }
}
