import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import AllPlayersState from './context/allPlayers/AllPlayersState'
import theme from './theme'
import Appbar from './components/layout/Appbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Admin from './components/pages/Admin'
import Feedback from './components/pages/Feedback'


import './App.css';


const App = () => {


  return (
    <AllPlayersState>
      <ThemeProvider theme={theme}>
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
    </AllPlayersState>
  );
}

export default App;
