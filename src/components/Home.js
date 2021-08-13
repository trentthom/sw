import React, {useEffect, useState} from 'react'
import Shortlist from './Shortlist'

const URL = 'https://swapi.dev/api/films/'

const Home = () => {
  
  const[movies, setMovies] = useState([])
  const[filter, setFilter] = useState('')
  const[shortList, setShortList] = useState({})

  useEffect(() => {
    fetchMovieData()
  }, []) //add dependencies

  const fetchMovieData = async () => {
    const response = await (await fetch(URL)).json()
    const movieResults = response.results
    setMovies(movieResults)

    const shortList = localStorage.getItem('shortList')
      if(shortList){
        setShortList(JSON.parse(shortList))
      }
  }

  // componentDidMount(){
  //   axios.get(URL).then((response) => {
  //     this.setState({movies: response.data.results});
  //   })
  //   const shortList = localStorage.getItem('shortList')
  //   if(shortList){
  //     this.setState({shortList: JSON.parse(shortList)})
  //   }
  // }


  useEffect(() => {
    console.log('working')
    localStorage.setItem('shortList', JSON.stringify(shortList))//CANT GET LOCAL STORAGE GOING???
  }, [shortList])


  const addToFavouritesList = (e) => {//no reson to delete first
    const filmName = e.target.name;
    if(!shortList[filmName]){
      setShortList({
        ...shortList,
        [filmName]: true
      })
    } else {
      delete shortList[filmName]
      setShortList({...shortList})
    }
  }

  // _addFav(e){
  //   const filmName = e.target.name;
  //   if (this.state.shortList[filmName]) {
  //     delete this.state.shortList[filmName];
  //   } else {
  //     this.state.shortList[filmName] = true;
  //   }
  //   this.setState({shortList: this.state.shortList }, () => {
  //     localStorage.setItem('shortList', JSON.stringify(this.state.shortList))
  //   })
  // }


  return(
    <div className='twinkling'>
      <div className='container'>
        <h1>Star Wars Search</h1>
        <form>
          <label>Movie Search</label>
            <input type="text"
            placeholder='Search for movies here...'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </form>
        <Shortlist
          shortList={shortList}
        />
          {movies.filter(movie => {
              return movie.title.toLowerCase().indexOf(filter.toLowerCase()) >= 0
            })
            .map((movie, index) => {
              return (
                <div className="movieList" key={movie.episode_id}>
                  <button className={shortList[movie.title] ? 'favButton' : 'favButtonOff'} name={movie.title} onClick={addToFavouritesList}></button>
                  <a className='movieLinks' href={`/movie/${index + 1}`}>{movie.title}</a>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default Home

// function addToFavouritesList(e){
//   const filmName = e.target.name;

//   if (shortList[filmName]) {
//     delete shortList[filmName];
//   } else {
//     shortList[filmName] = true;
//   }
// }
