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
    dispatch({type: 'PLAY_AUDIO', payload: {name:'gameSound', src:'../../audio/start.mp3'}})
  }
}

export function updateMe(game, picked){
  picked == game.selected? game.right++:game.wrong++
  game.clicked++
  return dispatch => {
    picked == game.selected? dispatch({type: 'PLAY_AUDIO', payload: {name:'gameSound', src:'../../audio/right.mp3'}}):dispatch({type: 'PLAY_AUDIO', payload: {name:'gameSound', src:'../../audio/cuak.mp3'}})
    if((game.clicked > 3) || (game.right >= 3)) {
      game.right < 3? dispatch({type: 'PLAY_AUDIO', payload: {name:'gameSound', src:'../../audio/game_over.mp3'}}): dispatch({type: 'PLAY_AUDIO', payload: {name:'gameSound', src:'../../audio/win.mp3'}})
      dispatch({type: 'CARD_END', payload: ''})
    }
    dispatch({type: 'UPDATE_GAME', payload: game})
  }
}

export function gameReset(game){
  return dispatch => {
    dispatch({type: 'END_GAME'})
    dispatch({ type: 'CARD_RESET'})
    dispatch({type: 'START_GAME', payload: game})
    dispatch({type: 'COUNTER_UPDATE', payload: 5})
    dispatch({type: 'PLAY_AUDIO', payload: {name:'gameSound', src:'../../audio/reset.mp3'}})
  }
}
