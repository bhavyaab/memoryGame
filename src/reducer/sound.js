
let initialState = {
  mute: false,
  volume: 0.05,
  muteImage: '../../image/volume-mute.png',
  effects: {},
}

export default (state=initialState, action) =>{
  let {type, payload} = action
  let { effects } = state
  let audio
  switch (type) {
  case 'LOAD_AUDIO':
    state.effects[payload.name] = payload.value
    return state
  case 'PLAY_AUDIO':
    audio = state.effects[payload.name]
    if(payload.src) audio.src = payload.src
    if(payload.volume) audio.volume = payload.volume
    audio.play()
    return state
  case 'SET_VOLUME':
    audio = state.effects[payload.name]
    audio.volume = payload.volume
    return state
  case 'MUTE_AUDIO':
    state.mute = !state.mute
    if(state.mute) state.muteImage = '../../image/volume-mute2.png'
    if(!state.mute) state.muteImage = '../../image/volume-mute.png'
    return state
  case 'STOP_AUDIO':
    audio = state.effects[payload]
    audio.pause()
    return state
  case 'CONTROL_AUDIO':
    state[payload.name] = payload.value
    return state
  default:
    return state
  }
}
