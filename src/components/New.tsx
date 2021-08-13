import { useEffect, useState } from 'react'

const New = () => {

    const [movies, setMovies] = useState([]) //move array from first API call
    const [movieSelection, setMovieSelection] = useState('') // users movie selection
    


    useEffect(() => {
        const fetchMyMovies = async () => {
            const response = await (await fetch('https://swapi.dev/api/films/')).json()
            // setResponseFromAPI(response.results)
            // console.log('api res',response.results)
            // const movieList = response.results.map(({title}: any) => title)
            setMovies(response.results)
        }
        fetchMyMovies()
    },[])

    useEffect(() => {
        const characters = movies.filter((el :any) => {
            if(el.title === movieSelection){
                console.log(el.characters) 
            }
        })
         console.log('characters variable',characters)
    },[movieSelection])
        
   
    return(
        <div>
            <h1>New page</h1>
            <form>
                <label htmlFor='select movie'>
                    Select Movie
                    <select 
                        id='movieList'
                        value={movieSelection}
                        onChange={e => setMovieSelection(e.target.value)}
                        onBlur={e => setMovieSelection(e.target.value)}
                    >
                        <option />
                        {movies.map(({title}: any) => (
                            <option 
                                key={title} 
                                value={title}
                            >
                                {title}
                            </option>
                        ))}
                    </select>
                </label>

            </form>
        </div>
        
    )       
}

export default New