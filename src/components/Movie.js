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
    this._nameFixer = this._nameFixer.bind(this)
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

  _nameFixer(e){
    const name = e.target.childNodes[0].wholeText
    const nameFixedname = name.split(' ').join('').toLowerCase()
    console.log(nameFixedname)
    this.setState({image: `/${nameFixedname}.jpeg` })
  }
  // <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />

  render(){
    const text = this.state.newData ? this.state.newData.map(function (k){
      return (
        <Tippy placement='right' key={k.name} content={
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
    <div>{'loading...'}</div>

    return(
      <div>
        <h1>{this.state.title}</h1>
        <img className='image' src={this.state.image} alt="coming soon" />
        <div className='characterDiv' onClick={this._nameFixer}>
          {text}
        </div>
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
