import React, { Fragment, useState, useContext } from 'react'
import AllPlayersContext from '../../context/allPlayers/allPlayersContext'
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



function InitialSearch() {
  const [value, setValue] = useState("")
  const classes = useStyles();
  const allPlayersContext = useContext(AllPlayersContext)


  const { filtered, filterPlayers, clearFilterPlayers } = allPlayersContext



  const onChange = e => {
    setValue(e.target.value)
    if (value.length > 1) {
      filterPlayers(e.target.value)
    } else {
      clearFilterPlayers()
    }
  }

  return (
    <Fragment>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" value={value} variant="outlined" label="Search for a Player" onChange={onChange} />
      </form>
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          {filtered !== null ?
            (filtered.map(player => (
              <ListItem button>
                <ListItemText key={player._id} primary={player.name} />
              </ListItem>
            )))
            :
            <div>Start typig the name of a player you would like to search for.</div>
          }
        </List>
      </div>
    </Fragment>
  )
}

export default InitialSearch
