import React, {Component, useState} from 'react'
import axios from 'axios'
import Shortlist from './Shortlist'


const URL = 'https://swapi.dev/api/films/'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      filter: ''
    }
    this._changeHandler = this._changeHandler.bind(this)
  }

  componentDidMount(){
    axios.get(URL).then((response) => {
      console.log(response)
      this.setState({movies: response.data.results});
    })
  }

  _changeHandler(e){
    this.setState({filter: e.target.value})
  }


  render(){
    console.log(this.state.filter)
    const movies = this.state.movies
    .filter(movie => {
      return movie.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0
    })
    .map(function(d, index){
      return(
        <div className="movieList" key={d.episode_id}>
          <a href={`/movie/${index + 1}`}>{d.title}</a>
        </div>
      )
    })
    return(
      <>
      <h1>Star Wars Search</h1>
      <form>
      <label>Movie Seach</label>
        <input type="text"
        placeholder='serach for movies here...'
        value={this.state.filter}
        onChange={this._changeHandler}
      />
      </form>
      <Shortlist />
        {movies}

      </>
    )
  }
}

export default Home
// <Answers answers={this.state.answers} onClick={this.handleClick} />

// const movies = this.state.movies.map(function(m, index){
//   return (
//     <div className="movieList" key={m.episode_id}>
//       <a href={`/movie/${index + 1}`}>{m.title}</a>
//     </div>
//   )
// })
//
// render(){
//   const movies = this.state.movies
//   .filter(d => this.state.filter === '' || d.includes(this.state.filter))
//   .map(function(d, index){
//     return(
//       <div className="movieList" key={d.episode_id}>
//         <a href={`/movie/${index + 1}`}>{d.title}</a>
//       </div>
//     )
//   }
//   return(
//     <>
//     <h1>Star Wars Search</h1>
//     <form>
//     <label>Movie</label>
//       <input type="text" value={this.state.filter} onChange={this._changeHandler}/>
//     </form>
//
//       {movies}
//
//     </>
//   )
// }
// }
