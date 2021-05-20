import React, {Component} from 'react'
import axios from 'axios'

const URL = 'https://swapi.dev/api/films/'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    axios.get(URL).then((response) => {
      this.setState({movies: response.data.results});
    })
  }



  render(){
    const movies = this.state.movies.map(function(m, index){
      return (
        <div className="movieList" key={m.episode_id}>
          <a href={`/movie/${index + 1}`}>{m.title}</a>
        </div>
      )
    })
    return(
      <>
      <h1>Star Wars Search</h1>
      <form>
      <label>Movie</label>
        <input className='input' type="text" name="film"/>
      </form>

        {movies}

      </>
    )
  }
}

export default Home
// <Answers answers={this.state.answers} onClick={this.handleClick} />
