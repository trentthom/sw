import React, {useEffect, useState} from 'react'
import Shortlist from './Shortlist'

const URL = 'https://swapi.dev/api/films/'

const Home = () => {
  
  const[movies, setMovies] = useState([])
  const[filter, setFilter] = useState('')
  const[shortList, setShortList] = useState([])

  useEffect(() => {
    fetchMovieData()
  }, [])

  const fetchMovieData = async () => {
    const response = await (await fetch(URL)).json()
    const movieResults = response.results
    setMovies(movieResults)

    const shortList = localStorage.getItem('shortList')
      if(shortList){
        setShortList(JSON.parse(shortList))
      }
  }

  useEffect(() => {
    localStorage.setItem('shortList', JSON.stringify(shortList))
  }, [shortList])

  const addToFavouritesList = (e) => {
    const filmName = e.target.name;

      shortList.indexOf(filmName) >= 0 ? setShortList(shortList.filter(movie => movie !== filmName))
      :
      setShortList([...shortList, filmName])
  }

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
                  <button className={shortList.includes(movie.title) ? 'favButton' : 'favButtonOff'} name={movie.title} onClick={addToFavouritesList}></button>
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


