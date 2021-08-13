import React, {useEffect, useState} from 'react'
import Characters from './Characters'
import CopyRight from './CopyRight'

const People = () => {

  const [characterData, setCharacterData] = useState([])
  const [nextCharsURL, setNextCharsURL] = useState('https://swapi.dev/api/people/')
  const [allowLoadMore, setAllowLoadMore] = useState(true)


  useEffect(() => {
    loadMoreCharacters()
  },[])

  async function loadMoreCharacters() {
    setAllowLoadMore(false)
    const response = await (await fetch(nextCharsURL)).json()
    setCharacterData(response.results)
    setNextCharsURL(response.next)
    setAllowLoadMore(true)
  }

  return(
    <div>
        <h1>People of Star Wars</h1>
        <Characters data={characterData}/>
        <div className='moreCharactersButtonDiv'>
          <button 
            disabled={!allowLoadMore} 
            className='moreCharactersButton' 
            onClick={loadMoreCharacters}
            >More Characters
          </button>
        </div>
      <CopyRight />
      </div>
  )
}

export default People











