'use strict'

export const updateCounter = (val) => ({
  type: 'COUNTER_UPDATE',
  payload: val,
})
