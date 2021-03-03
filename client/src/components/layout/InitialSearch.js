import React, { Fragment, useState, useContext } from 'react'
import AllPlayersContext from '../../context/allPlayers/allPlayersContext'
import PlayerContext from '../../context/player/playerContext'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, List, ListItem, ListItemText, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));



const InitialSearch = () => {
  const [value, setValue] = useState("")
  const [searching, setSearching] = useState(true)
  const [selectedPlayer, setSelectedPlayer] = useState(null)
  const classes = useStyles();
  const allPlayersContext = useContext(AllPlayersContext)
  const playerContext = useContext(PlayerContext)




  const { filtered, filterPlayers, clearFilterPlayers } = allPlayersContext

  const { loadPlayer, selected, setSelected } = playerContext
 


  const onChange = e => {
    setValue(e.target.value)
    if (value.length > 1) {
      e.preventDefault()
      filterPlayers(e.target.value)
    } else {
      clearFilterPlayers()
    }
  }

  const select = (player) => {

    setSelectedPlayer(player)
    clearFilterPlayers()
    setValue('')
    setSearching(false)
    loadPlayer(player._id)
  }

  return (
    <Fragment>
      {searching === true ?
        (
          <Fragment>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="outlined-basic" value={value} variant="outlined" label="Search for a Player" onChange={onChange} />
            </form>
            <div className={classes.root}>
              <List component="nav" aria-label="main mailbox folders">
                {filtered !== null ?
                  (filtered.map(player => (
                    <Fragment>
                      <ListItem button onClick={(e) => select(player)}>
                        <ListItemText altKey={player._id} primary={player.name}  />
                      </ListItem>
                      <Divider />
                    </Fragment>
                  )))
                  :
                  <div></div>
                }
              </List>
            </div>
          </Fragment>
        )
        :
        (
          <Fragment></Fragment>
        )
      }
    </Fragment>
  )
}

export default InitialSearch
