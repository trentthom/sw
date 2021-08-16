
 const sList = (props) => {
  return(
    <div className='favoutiteArea'>
      <span className='favTitle'>Favourite Movies:{' '}
      {props.shortList.map(function(movieName){
        return(
          <span className='shortListSpan' key={movieName}>{movieName},</span>
        )
      })}
      </span>
    </div>
  )
}

export default sList
