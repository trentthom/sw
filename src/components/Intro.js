import React, {useEffect, useState} from 'react'


const URL = 'https://swapi.dev/api/films/'

const Intro = () => {

  const[movieData, setMovieData] = useState(null)
  const[crawl, setCrawl] = useState('')
  const[style, setStyle] = useState('')
  
  useEffect( () => {
    fetchMovieData()
  })

  const fetchMovieData = async () => {
    const response = await (await fetch(URL)).json()
    setMovieData(response.results)
  }

  function setMyCrawl(e) { 
    const crawlIndex = e.target.name
    setCrawl(movieData[crawlIndex].opening_crawl)
    setStyle('crawl 60s linear')
  }

  return(
    <div>
        <h1>Movie Crawl</h1>
        <p>Click a button to see the crawl</p>
        <div className='crawlButtonsContainer'>
          {movieData ? movieData.map( (movie, index) => {
            return(
              <button 
                key={movie.title}
                onClick={setMyCrawl}
                name={index}
                >
                {movie.title}
              </button>
            )
          })
          :
          <div className="lds-dual-ring"></div> }

        </div>
        <div style={{height: '3rem'}}></div>
        <div>
          <p className='introBlurb'>A long time ago in a galaxy, far far, away... </p>
        </div>
        <div className="fade"></div>
        <section className='starWars'>
          <div className='crawl' style={{animation : style}}>
            {crawl}
          </div>
        </section>
      </div>
  )
}

export default Intro


