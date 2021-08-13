import React, { Component } from "react"
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Movie from './Movie'
import MetaTags from 'react-meta-tags'
import Planets from './Planets'
import People from './People'
import Intro from './Intro'
import New from './New'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <>
        <MetaTags>
          <title>Star Wars Search</title>
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </MetaTags>
      <Navbar />
        <Router>
          <Switch>
            <Route path='/' component={Intro} exact />
            <Route path='/search' component={Home}  />
            <Route path='/movie/:movieId' component={Movie} />
            <Route path='/planets' component={Planets} />
            <Route path='/people' component={People} />
            <Route path='/new' component={New} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
