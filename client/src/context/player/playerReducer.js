import {
 LOAD_PLAYER
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case LOAD_PLAYER:
      return {
        ...state,
        loading: false,
        player: action.payload,
        selected: true
      }
   default:
  return state
}
}