import React, {Component} from 'react'
import axios from 'axios'
import Characters from './Characters'

class Movie extends Component{
  constructor(props){
    super()
    this.state = {
      title: '',
      newData: '',
    }
  }

  componentDidMount(){
    const movieId = this.props.match.params.movieId
    axios.get(`https://swapi.dev/api/films/${movieId}/`).then((response) => {
      this.setState({title: response.data.title})
      const charURLS = response.data.characters
      return Promise.all(charURLS.map((u) => {
        return axios.get(u)
          .then((response) => {
            const swNames = response.data
            console.log('swNames', swNames)
            return swNames
          })
      }))
    })
    .then(items => this.setState({
      newData: items
    }))
  }

  render(){
    const text = this.state.newData ? this.state.newData.map(function (k){
      return <div key={k.name}> {k.name} | {k.height} | {k.mass} </div>
    })
    : <div>{'loading...'}</div>
    console.log('from render',this.state.newData)
    return(
      <div>
        <h1>{this.state.title}</h1>
        {text}
        <Characters characterObjects={this.state.newData}/>
      </div>
    )
  }
}

export default Movie
// <Characters characterURLS={this.state.characters}/>

// setTimeout(function(){
//   console.log('aftertimeout',urlData)
// },4000)
