import React from 'react'
import Navbar from './Navbar'
import Characters from './Characters'
import axios from 'axios'
import CopyRight from './CopyRight'


class People extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      characterData: [],
      nextCharsURL: 'https://swapi.dev/api/people/',
      allowLoadMore: true
    }
    this.loadMoreCharacters = this.loadMoreCharacters.bind(this)
  }

  componentDidMount(){
    this.loadMoreCharacters()
  }

  loadMoreCharacters(){
    this.setState({allowLoadMore: false})
    axios.get(this.state.nextCharsURL).then((response) => {
      this.setState({characterData: response.data.results, nextCharsURL: response.data.next, allowLoadMore: true})
    })
  }


  render(){
    console.log(' from render state',this.state)
    return(
      <div>
        <Navbar />
        <h1>People of Star Wars</h1>
        <Characters data={this.state.characterData}/>
        <div className='moreCharactersButtonDiv'>
          <button disabled={!this.state.allowLoadMore} className='moreCharactersButton' onClick={this.loadMoreCharacters}>More Characters</button>
        </div>
      <CopyRight />
      </div>
    )
  }
}

export default People
