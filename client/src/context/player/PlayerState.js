import { useReducer } from 'react'
import axios from 'axios'
import PlayerContext from './playerContext'
import playerReducer from './playerReducer'
import {
  ADD_PLAYER,
  UPDATE_PLAYER_MATCH,
  UPDATE_PLAYER_TOURNAMENT,
  GET_PLAYER,
  GET_PARTNERS,
  GET_TOURNAMENTS,
  GET_MATCHES,
  GET_RECORD,
  GET_FINISHES,
  GET_TOURNAMENT_DATES,
  GET_SEASON,
  FILTER_BY_PARTNER,
  FILTER_BY_OPPONENT_PLAYER,
  FILTER_BY_OPPONENT_TEAM,
  FILTER_BY_SEASON,
  FILTER_BY_OPPONENT_COUNTRY,
  FILTER_BY_TOURNAMENT_COUNTRY,
  FILTER_BY_NUMBER_OF_SETS,
  FILTER_BY_MATCH_LENGTH,
  FILTER_BY_MATCH_ROUND,
} from '../types'
import players from './tempPlayers'

const PlayerState = props => {
  const initialState = { players }

  const [state, dispatch] = useReducer(playerReducer, initialState)

  // Add player

  // Update player tournament

  // Update player match

  // Get players

  // Get partners

  return (<PlayerContext.Provider
    value={{
      players: state.players
    }}>
    {props.children}
  </PlayerContext.Provider>)
}

export default PlayerState