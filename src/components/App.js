import React, { Component } from "react"
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Movie from './Movie'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/movie/:movieId' component={Movie} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
