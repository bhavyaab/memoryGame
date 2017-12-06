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
export const mute_Audio = (val) => ({
  type: 'MUTE_AUDIO',
  payload: val,
})

export function muteAudio (name, mute) {
  console.log('MUTE audio>>  name ', name , ' mute ', mute )
  mute = !mute
  if(!mute){
    return dispatch => {
      dispatch({type: 'PLAY_AUDIO', payload: name})
      dispatch({ type: 'MUTE_AUDIO', payload: mute})
    }
  }
  if(mute){
    return dispatch => {
      dispatch({type: 'STOP_AUDIO', payload: name})
      dispatch({ type: 'MUTE_AUDIO'})
    }
  }
}
