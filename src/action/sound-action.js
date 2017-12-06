'use strict'

export const soundMute = (val) => ({
  type: 'SOUND_MUTE',
  payload: val,
})

export const playAudio = (val) => ({
  typr: 'PLAY_AUDIO',
  payload: val,
    // if(this.props.mute) return
    // this.props.audio.loop = false
    // this.props.audio.play()
})
// export const loopAudio = (val) => ({
//     // if(this.props.mute) return
//     // this.props.audio.loop = true
//     // this.props.audio.play()
// })
export const stopAudio = (val) => ({
  type: 'STOP_AUDIO',
  payload: val,
})
export const loadAudio = (val) => ({
  type: 'LOAD_AUDIO',
  payload: val,
})

export const controlAudio = (val) => ({
  type: 'CONTROL_AUDIO',
  payload: val,
})
export const muteAudio = (val) => ({
  type: 'MUTE_AUDIO',
  payload: val,
})
export const updateSound = (val) => ({
  type: 'MUTE_AUDIO',
  payload: val,
})

let name
export function mute_Audio (sound) {
  return dispatch => {
    for(var prop in sound.effects){
      sound.mute? dispatch({type: 'PLAY_AUDIO', payload: prop}):dispatch({type: 'STOP_AUDIO', payload: prop})
    }
    dispatch({ type: 'MUTE_AUDIO'})
  }
}
