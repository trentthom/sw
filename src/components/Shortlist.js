import React from 'react'

 const sList = ({shortList}) => {

  return(
    <div>
    <p>
      Favourite movies:
    </p>
      {Object.keys(shortList).map(function(movieName){
        return(
          <p key={movieName}>
            {movieName}
          </p>
        )
      })}
    </div>
  )
}

export default sList
