import React, { Fragment, useContext } from 'react'
import PlayerContext from '../../context/player/playerContext'

const Player = () => {
  const playerContext = useContext(PlayerContext)

  const { players } = playerContext
  return (
    
    <Fragment>
      {players.map(player => (
        <h3>{player.name}</h3>
      ))}
    </Fragment>
  )
}

export default Player
