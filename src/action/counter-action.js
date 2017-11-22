'use strict'


export const counterUpdate = (val) => ({
  type: 'COUNTER_UPDATE',
  payload: val,
})
export const counterEnd = (val) => ({
  type: 'COUNTER_ENDS',
  payload: val,
})
