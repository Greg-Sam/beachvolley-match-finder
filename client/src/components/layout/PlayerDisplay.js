import React, { Fragment, useState, useContext } from 'react';
import PlayerContext from '../../context/player/playerContext'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PlayerDisplay = () => {
  
  const classes = useStyles();
  const playerContext = useContext(PlayerContext)

  const { player, loadPlayer, selected } = playerContext

  return (
    <Fragment>
  {selected === true ? 
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {player.name}
        </Typography>
        <Typography variant="h5" component="h2">

        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {player.nationality}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    :
    <Fragment> 
      </Fragment>
    }
    </Fragment>
  );
}

export default PlayerDisplay