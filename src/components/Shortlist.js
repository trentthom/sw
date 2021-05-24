import React from 'react'

export default ({favourites, movies}) => {
  return(
    <div>
      <p>
        Favourite Movies:
      </p>
      <div>
        {favourites}
      </div>
    </div>
  )
}
