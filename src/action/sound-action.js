'use strict'

export const soundMute = (val) => ({
  type: 'SOUND_MUTE',
  payload: val,
})

// export const playAudio = (val) => ({
//     // if(this.props.mute) return
//     // this.props.audio.loop = false
//     // this.props.audio.play()
// })
// export const loopAudio = (val) => ({
//     // if(this.props.mute) return
//     // this.props.audio.loop = true
//     // this.props.audio.play()
// })
export const stopAudio = (val) => ({
  type: 'STOP_AUDIO',
  payload: val,
})
// export const muteAudio = (val) => ({
//     // this.props.mute = !this.props.mute
//     // this.props.audio.pause()
//     // if(!mute) document.getElementById('soundIcon').src = soundOn
//     // if(mute)  document.getElementById('soundIcon').src = soundOff
// })
