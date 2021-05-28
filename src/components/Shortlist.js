import React from 'react'

 const sList = ({shortList}) => {

  return(
    <div className='favoutiteArea'>
      <span className='favTitle'>Favourite Movies:{' '}
      {Object.keys(shortList).map(function(movieName){
        return(
          <span className='shortListSpan' key={movieName}>{movieName},</span>
        )
      })}
      </span>
    </div>
  )
}

export default sList
