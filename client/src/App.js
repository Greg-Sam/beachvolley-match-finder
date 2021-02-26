import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
import Appbar from './components/layout/Appbar'
import Home from './components/pages/Home'
import About from './components/pages/About'

import PlayerState from './context/player/PlayerState'
import './App.css';


const App = () => {


  return (
    <ThemeProvider theme={theme}>
      <PlayerState>
        <Router>
          <Fragment>
            <Appbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </Fragment>
        </Router>
      </PlayerState>
    </ThemeProvider>

  );
}

export default App;
