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
    console.log("e.target", e.target)
    const buttonColor = e.target.classList.toggle('favButtonOff') //true is RED and added to Favourite list
    // console.log(buttonColor)


    let favList = [] //wrap this in a loop and check if x === e.target.name ?!!?!?!?!
    if(buttonColor){
      favList = this.state.shortList.concat(e.target.name)
      console.log(favList)
    } else {
      console.log('false')
      console.log(e.target.name)

      for(const x of favList){
        console.log('heres x',x)
        // if(x === e.target.name) console.log('match')
      }
    }

    this.setState({shortList: favList}, () => {
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
          <button className='favButton' name={d.title} onClick={this._addFav}></button>
          <a href={`/movie/${index + 1}`}>{d.title}</a>
        </div>
      )
    })
    return(
      <div className='twinkling'>
        <div className='container'>
          <h1>Star Wars Search</h1>
          <img className='starwars' src={process.env.PUBLIC_URL + '/starwars.jpeg'}  alt='star wars logo'/>
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
        </div>
      </div>
    )
  }
}

export default Home

// _addFav(e){
//   // console.log(e.target.classList.value)
//   const buttonColor = e.target.classList.toggle('favButtonOff') //true is RED and added to Favourite list
//   // console.log(buttonColor)
//
//
//   const favList = this.state.shortList.concat(e.target.name)
//   const noDupes = new Set(favList)
//   const noDupesArray = []
//   for(const x of noDupes){
//     if(buttonColor){
//       noDupesArray.push(x)
//     } else if(x === e.target.name){
//       console.log(x === e.target.name)
//       noDupesArray.splice(x, 1)
//       console.log(noDupesArray[x])
//     }
//
//
//
//   }
//   this.setState({shortList: noDupesArray}, () => {
//     localStorage.setItem('shortList', JSON.stringify(this.state.shortList))
//   })
//
//
//
// }
