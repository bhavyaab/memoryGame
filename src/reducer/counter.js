'use strict';

export default (state=5, action) => {
  let {type, payload} = action
  // console.log(type,  ' ========  ', state, payload)
  switch(type){
    case 'COUNTER_START':
        return state
    case 'COUNTER_UPDATE':
       state = payload;
       return state
    case 'COUNTER_ENDS':
       return 0
    default:
       return state
  }
}
