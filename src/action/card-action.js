'use strict'


export const cardStart = (val) => ({
  type: 'CARD_START',
  payload: val,
})

export const cardFlip = (val) => ({
  type: 'CARD_FLIP',
  payload: val,
})


export const cardToggle = (val) => ({
  type: 'CARD_TOGGLE',
  payload: val,
})
