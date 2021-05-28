import React, { Component } from "react"
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Movie from './Movie'
import MetaTags from 'react-meta-tags'

class App extends Component {
  render() {
    return (
      <>
        <MetaTags>
          <title>Star Wars Search</title>
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </MetaTags>
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
