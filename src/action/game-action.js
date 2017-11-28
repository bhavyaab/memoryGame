'use strict'


export const startGame = (game) => ({
  type: 'START_GAME',
  payload: {...game },
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
  picked == game.selected? game.right++:game.wrong++
  game.clicked++
  if((game.clicked > 3) || (game.right === 3)) return dispatch => {
    dispatch({type: 'UPDATE_GAME', payload: game})
    dispatch({type: 'CARD_END', payload: ''})
  }
  return dispatch => {dispatch({type: 'UPDATE_GAME', payload: game})}
}

export function gameReset(game){
  return dispatch => {
    dispatch({type: 'END_GAME'})
    dispatch({ type: 'CARD_RESET'})
    dispatch({type: 'START_GAME', payload: game})
    dispatch({type: 'COUNTER_UPDATE', payload: 5})
  }
}
