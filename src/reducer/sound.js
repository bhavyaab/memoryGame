
let initialState = {
  mute: false,
  volume: 0.001,
  src: '../../image/volume-mute.png',
}

export default (state=initialState, action) =>{
  let {type, payload} = action
  let audio
  switch (type) {
  case 'LOAD_AUDIO':
    state[payload.name] = payload.value
    return state
  case 'PLAY_AUDIO':
    audio = state[payload]
    audio.play()
    return state
  case 'MUTE_AUDIO':
    state.mute = !state.mute
    if(state.mute) state.src = '../../image/volume-mute2.png'
    if(!state.mute) state.src = '../../image/volume-mute.png'
    return state
  case 'STOP_AUDIO':
    audio = state[payload]
    audio.pause()
    return state
  case 'CONTROL_AUDIO':
    state[payload.name] = payload.value
    return state
  default:
    return state
  }
}
