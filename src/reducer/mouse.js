
let initialState = {
  offsetX: 0,
  offsetY: 0,
}

export default (state=initialState, action) =>{
  let {type, payload} = action
  console.log(action)
  switch (type) {
  case 'FOLLOW_MOUSE':
    state = payload
    return state
  default:
    return state
  }
}
