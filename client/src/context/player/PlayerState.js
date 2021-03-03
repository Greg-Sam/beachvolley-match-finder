import React, { useReducer } from 'react'
import axios from 'axios'
import PlayerContext from './playerContext'
import playerReducer from './playerReducer'
import {
  LOAD_PLAYER,
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

const PlayerState = props => {
  const initialState = {
    player: null,
    error: null,
    selected: false,
    loading: true
  }

  const [state, dispatch] = useReducer(playerReducer, initialState)

  // Load player
  const loadPlayer = async (_id) => {
    try {
      const res = await axios.get(`api/player/${_id}`)

      dispatch({
        type: LOAD_PLAYER,
        payload: res.data
      })
    } catch (err) {
      console.log(err)
    }
  }
 
 
  // Get partners

  return (<PlayerContext.Provider
    value={{
      selected: state.selected,
      player: state.player,
      loadPlayer,
    }}>
    {props.children}
  </PlayerContext.Provider>)
}

export default PlayerState