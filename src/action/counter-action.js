'use strict'

export const updateCounter = (val) => ({
  type: 'COUNTER_UPDATE',
  payload: val,
})

export function updateCounterStatus(val, card){
  return dispatch => {
    dispatch({type: 'COUNTER_UPDATE', payload: val})
    val == 0? dispatch({type: 'CARD_START', payload: card}):''
    val >= 0? dispatch({type: 'PLAY_AUDIO', payload: {name:'gameSound', src:'../../audio/tic.mp3'}}): dispatch({type: 'PLAY_AUDIO', payload: {name:'gameSound', src:'../../audio/start.mp3'}})
  }
}
