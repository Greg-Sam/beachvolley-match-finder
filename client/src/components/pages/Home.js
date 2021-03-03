import React, { Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PlayerDisplay from '../layout/PlayerDisplay'
import InitialSearch from '../layout/InitialSearch'


const Home = () => {
  return (
  
    
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <div>
        <InitialSearch />
      </div>
      <div>
        <PlayerDisplay />
      </div>
      
      </Container>
    </Fragment>
  )
}

export default Home
