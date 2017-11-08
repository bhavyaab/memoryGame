let initialState = {
  score: 0,
  clicked: 0,
  right: 0,
}

export default (state=initialState, action) => {
  let {type, payload} = action
  console.log('__REDUCER__', {...state, ...payload})
  switch (type) {
  case 'START_GAME':
    return {...state, ...payload}
  case 'UPDATE_GAME':
    return {...state, payload}
  case 'END_GAME':
    return {...state, payload}
  default:
    return state
  }
}
