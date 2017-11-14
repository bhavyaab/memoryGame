'use strict'

import uuid from 'uuid/v1'

export const startGame = (game) => ({
  type: 'START_GAME',
  payload: {...game, id:uuid() },
})

export const updateGame = (game) => ({
  type: 'UPDATE_GAME',
  payload: {...game},
})

export const endGame = (game) => ({
  type: 'END_GAME',
  payload: {},
})
