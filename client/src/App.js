import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AllPlayersState from './context/allPlayers/AllPlayersState'
import PlayerState from './context/player/PlayerState'
import { ThemeProvider, } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import Appbar from './components/layout/Appbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Admin from './components/pages/Admin'
import Feedback from './components/pages/Feedback'


import './App.css';


const App = () => {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <AllPlayersState>
      <PlayerState>
        <ThemeProvider theme={darkTheme}>
          <Router>
            <Fragment>
              <Appbar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/feedback' component={Feedback} />
                <Route exact path='/admin' component={Admin} />
              </Switch>
            </Fragment>
          </Router>
        </ThemeProvider>
      </PlayerState>
    </AllPlayersState>
  );
}

export default App;
