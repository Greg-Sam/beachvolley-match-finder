import React, { Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PlayerDisplay from '../players/PlayerDisplay'


const Home = () => {
  return (
  
    
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <div>
        {/* will be player search bar */}
      </div>
      <div>
        <PlayerDisplay />
      </div>
      
      </Container>
    </Fragment>
  )
}

export default Home
