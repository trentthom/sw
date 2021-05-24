import React, {Component} from 'react'
import axios from 'axios'
import Shortlist from './Shortlist'


const URL = 'https://swapi.dev/api/films/'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      filter: '',
      favourites: [],
    }
    this._changeHandler = this._changeHandler.bind(this)
    this._addToFavourites = this._addToFavourites.bind(this)
  }

  componentDidMount(){
    axios.get(URL).then((response) => {
      this.setState({movies: response.data.results});
    })
  }

  _changeHandler(e){
    const names = []
    names.push(e.target.value)
    this.setState({filter: names})
  }

  _addToFavourites(e){
    const favList = this.state.favourites.concat(e.target.name) //adds arrays together
    const movies = this.state.movies
    const matchMovie =  movies.map((m, index) => {
      // console.log(m.title, index)
      // console.log(favList)
      for(const x of favList){
        console.log( x.title)
        // (m.title === x)
      }
    })


    // movies.indexOf(favList.join(' '))
    // console.log(movies, movies.indexOf(favList.join(' ')))
    // console.log('matchedindex:', matchMovie)
    // console.log('fav list joined:',favList.join(' '))
    this.setState({favourites: favList})

  }


  render(){
    const movies = this.state.movies
    .filter(movie => {
      return movie.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0
    })
    .map((d, index) => {
      return(
        <div className="movieList" key={d.episode_id}>
          <a href={`/movie/${index + 1}`}>{d.title}</a>
          <button name={d.title} onClick={this._addToFavourites}>FAV BUTTON</button>
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
      <Shortlist
      favourites={this.state.favourites}
      movies={this.state.movies}
      />
        {movies}
      </>
    )
  }
}

export default Home

//retun()

// return(
//   <>
//   <h1>Star Wars Search</h1>
//   <form>
//   <label>Movie Seach</label>
//     <input type="text"
//     placeholder='serach for movies here...'
//     value={this.state.filter}
//     onChange={this._changeHandler}
//   />
//   </form>
//   <Shortlist
//   favourites={this.state.favourites}
//   movies={this.state.movies}
//   />
//     {movies.map((m) => {
//       return(
//         <div>
//           {m}
//           <button onClick={this._addToFavourites}>{m}</button>
//         </div>
//       )
//     })}
//   </>
// )
