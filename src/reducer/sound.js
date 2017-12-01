
let initialState = {
  mute: false,
}

export default (state=initialState, action) =>{
  let {type, payload} = action
  switch (type) {
  case 'SOUND_MUTE':
    state.mute = !state.mute
    return state
  default:
    return state
  }
}
