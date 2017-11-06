let initialState = {}

export default (state=initialState, action){
  let {type, payload} = action

  switch (type) {
    case 'START_GAME':
     return {...state, [payload]}

    case 'UPDATE_GAME':
     return {...state, payload}
    case 'END_GAME':
     return {...state, payload}
    default:
     return state
  }
}
