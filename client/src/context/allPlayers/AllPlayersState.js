import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import AllPlayersContext from './allPlayersContext'
import allPlayersReducer from './allPlayersReducer'
import {
  GET_ALL_PLAYERS,
  FILTER_PLAYERS,
  CLEAR_FILTER_PLAYERS,
  SET_SEARCHING
} from '../types'


const AllPlayersState = props => {
  const initialState = {
    players: null,
    error: null,
    loading: true,
    filtered: null
  }

  const [state, dispatch] = useReducer(allPlayersReducer, initialState)

  // Get all players
  const getAllPlayers = async () => {
    try {
      const res = await axios.get('/api/players')

      dispatch({
        type: GET_ALL_PLAYERS,
        payload: res.data
      })
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => 
  getAllPlayers()
  )

  // Filter Players
  const filterPlayers = text => {
    dispatch({ type: FILTER_PLAYERS, payload: text })
  }

  // Clear Filter Players
  const clearFilterPlayers = () => {
    dispatch({ type: CLEAR_FILTER_PLAYERS})
  }

  return (<AllPlayersContext.Provider
    value={{
      players: state.players,
      filtered: state.filtered,
      filterPlayers,
      clearFilterPlayers
    }}>
    {props.children}
  </AllPlayersContext.Provider>)
}

export default AllPlayersState
