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

export function startMe(game, card){
  return dispatch => {
    dispatch({type: 'START_GAME', payload: game})
    dispatch({ type: 'CARD_TOGGLE', payload: card})
  }
}

export function updateMe(game, picked){
  if(picked == game.selected) game.right++
  game.clicked++;
  if((game.clicked > 3) || (game.right == 3)) return dispatch => {
    dispatch({type: 'END_GAME', payload: game})
    dispatch({type: 'CARD_END', payload: ''})
  }
  return dispatch => {dispatch({type: 'UPDATE_GAME', payload: game})}
}

export function gameReset(game){
  return dispatch => {
    dispatch({type: 'START_GAME' })
    dispatch({ type: 'CARD_RESET'})
    dispatch({ type: 'COUNTER_UPDATE'})
  }
}
