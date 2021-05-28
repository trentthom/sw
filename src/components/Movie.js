import React, {Component} from 'react'
import axios from 'axios'
import Characters from './Characters'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'


class Movie extends Component{
  constructor(props){
    super()
    this.state = {
      title: '',
      newData: '',
      image: '',
    }
  }

  componentDidMount(){
    const movieId = this.props.match.params.movieId
    let title = '';
    axios.get(`https://swapi.dev/api/films/${movieId}/`).then((response) => {
      title = response.data.title
      const charURLS = response.data.characters
      return Promise.all(charURLS.map((u) => {
        console.log(u)
        return axios.get(u)
          .then((response) => {
            const swNames = response.data
            return swNames
          })
      }))
    })
    .then(items => this.setState({
      newData: items, title
    }))
  }

  render(){
    console.log(this.state.newData[0])
    const text = this.state.newData ? this.state.newData.map(function (k){
      return (
        <Tippy placement='left' key={k.name} content={
          <ul>
            <li>{ k.name}</li>
            <li>{k.birth_year}</li>
            <li>{k.eye_color}</li>
            <li>{k.gender }</li>
            <li>{k.hair_color}</li>
            <li>{k.height}</li>
          </ul>
        }>
          <div className='namediv'key={k.name}>
            {k.name}
           </div>
       </Tippy>
      )
    })
    :
    <div className="lds-dual-ring"></div>

    return(
      <div>
      <img className='starwars' src={process.env.PUBLIC_URL + '/starwars.jpeg'}  alt='star wars logo'/>
        <h1>{this.state.title}</h1>
        <div className='charactersContainer'>
          <div className='characterList'>
            <div className='characterDiv'>
              {text}
            </div>
            <Characters characterObjects={this.state.newData}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Movie
// <Characters characterURLS={this.state.characters}/>

// setTimeout(function(){
//   console.log('aftertimeout',urlData)
// },4000)
