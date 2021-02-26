import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


const About = () => {
  return (
<Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      
        <div>
          <h1>About This App</h1>
          <p>This is a full stact React app for finding beach volleyball match and tournament history </p>
          <p>
            <strong>Version</strong> 1.0.0
          </p>

        </div>
      </Container>
    </Fragment>

   
  )
}

export default About
