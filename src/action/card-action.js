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

export const cardLookup = (val) => ({
  type: 'CARD_LOOKUP',
  payload: val,
})

export const cardEnd = (val) => ({
  type: 'CARD_END',
  payload: val,
})

