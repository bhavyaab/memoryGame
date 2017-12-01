
let initialState = {
  mute: false,
}

export default (state=initialState, action) =>{
  let {type, payload} = action
  console.log('payload audio ', type,  payload)
  switch (type) {
  case 'SOUND_MUTE':
    state.mute = !state.mute
    return state
  case 'STOP_AUDIO':
    console.log('payload audio ', payload)
    // this.props.audio.pause()
    return state
  default:
    return state
  }
}
