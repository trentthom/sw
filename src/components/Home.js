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
      shortList: [],
    }
    this._changeHandler = this._changeHandler.bind(this)
    this._addFav = this._addFav.bind(this)
  }

  componentDidMount(){
    axios.get(URL).then((response) => {
      console.log(response)
      this.setState({movies: response.data.results});
    })
    const shortList = localStorage.getItem('shortList')
    if(shortList){
      this.setState({shortList: JSON.parse(shortList)})
    }
  }

  _changeHandler(e){
    this.setState({filter: e.target.value})
  }

  _addFav(e){
    const favList = this.state.shortList.concat(e.target.name)
    const noDupes = new Set(favList)
    const noDupesArray = []
    for(const x of noDupes){
      noDupesArray.push(x)
    }
    this.setState({shortList: noDupesArray}, () => {
      localStorage.setItem('shortList', JSON.stringify(this.state.shortList))
    })
  }


  render(){
    const movies = this.state.movies
    .filter(movie => {
      return movie.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0
    })
    .map((d, index) => {
      return(
        <div className="movieList" key={d.episode_id}>
          <button name={d.title} onClick={this._addFav}>fav</button>
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
      <Shortlist
      shortList={this.state.shortList}
      />
        {movies}

      </>
    )
  }
}

export default Home
