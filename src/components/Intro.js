import React, {Component} from 'react'
import Navbar from './Navbar'
import axios from 'axios'


const URL = 'https://swapi.dev/api/films/'


class Intro extends Component {
  constructor(){
    super()
    this.state = {
      movieData: null,
      crawl: '',
      style:''
    }
    this._getCrawl = this._getCrawl.bind(this)
  }


  componentDidMount(){
    axios.get(URL).then((response) => {
      this.setState({movieData : response.data.results})
    })
  }

  _getCrawl(e){
    const movieId = e.target.name
    const movieCrawl = this.state.movieData[movieId].opening_crawl
    this.setState({crawl: movieCrawl, style: 'crawl 60s linear' })
  }


  render(){
    console.log('style',this.state.style)
    const movieTitles = this.state.movieData ? this.state.movieData.map((title, index) => {
      return(
        <button key={title.episode_id} onClick={this._getCrawl} name={index}> {title.title} </button>
      )
    })
    :
    <div className="lds-dual-ring"></div>



    const crawl = `${this.state.crawl} `

    return(
      <div>
        <Navbar />
        <h1>Movie Crawl</h1>
        <p>Click a button to see the crawl</p>
        <div className='crawlButtonsContainer'>
          {movieTitles}
        </div>
        <div style={{height: '3rem'}}></div>
        <div>
          <p className='introBlurb'>A long time ago in a galaxy, far far, away... </p>
        </div>
        <div className="fade"></div>
        <section className='starWars'>
          <div className='crawl' style={{animation :this.state.style}}>
            {crawl}
          </div>
        </section>
      </div>
    )
  }
}

export default Intro
