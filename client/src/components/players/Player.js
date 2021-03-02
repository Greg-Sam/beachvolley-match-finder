import React, { Fragment, useContext } from 'react'
import PlayerDisplay from './PlayerDisplay'
import PlayerContext from '../../context/player/playerContext'

const Player = () => {
  const playerContext = useContext(PlayerContext)

  const { players } = playerContext
  return (
    
    <Fragment>
      {players.map(player => (
        <PlayerDisplay key={player._id} player={player} />
      ))}
    </Fragment>
  )
}

export default Player
