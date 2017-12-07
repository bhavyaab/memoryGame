'use strict'

export const updateCounter = (val) => ({
  type: 'COUNTER_UPDATE',
  payload: val,
})

export function updateCounterStatus(val, card){
  if(val == 0) return dispatch => {
    dispatch({type: 'COUNTER_UPDATE', payload: val})
    dispatch({type: 'CARD_START', payload: card})
  }
  return dispatch => {
    dispatch({type: 'COUNTER_UPDATE', payload: val})
  }
}
