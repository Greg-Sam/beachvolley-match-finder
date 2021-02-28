import {GET_ALL_PLAYERS} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_PLAYERS:
      return {
        ...state,
        loading: false,
        players: action.payload
      }
    default:
      return state
  }
}