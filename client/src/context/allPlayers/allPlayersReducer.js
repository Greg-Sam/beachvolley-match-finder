import {
  CLEAR_FILTER_PLAYERS,
  FILTER_PLAYERS,
  GET_ALL_PLAYERS
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_PLAYERS:
      return {
        ...state,
        loading: false,
        players: action.payload
      }
    case FILTER_PLAYERS:
      return {
        ...state,
        filtered: state.players.filter(player => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return player.name.match(regex)
        })
      }
    case CLEAR_FILTER_PLAYERS:
      return {
        ...state,
        filtered: null
      }
    default:
      return state
  }
}