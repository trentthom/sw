import React, {Component} from 'react'
import axios from 'axios'
import PlanetCard from './PlanetCard'

class Planets extends Component {
  constructor(props){
    super(props)
    this.state = {
      planets : []
    }
  }

  componentDidMount(){
    let morePlanetsURL;
    axios.get('https://swapi.dev/api/planets').then((response) => {
      // morePlanetsURL = response.data.next
      this.setState({planets: response.data.results})
    })
  }

  render(){
    return(
      <div>
        <PlanetCard planetData={this.state.planets} />
      </div>
    )
  }
}

export default Planets
