import React from 'react'

function Characters(props){
  console.log('props from chacters',props)
  const people = props.data ? props.data.map((item, index) => {
    return(
      <div className='people' key={item.name}>
      <div className='imgDiv'>
        <img className='circle-img' src={`${process.env.PUBLIC_URL}/assets/images/${index}.png`} alt='logo' />
      </div>
        <h2>{item.name}</h2>
        <p>Height: {item.height} cms</p>
        <p>Weight: {item.mass} kgs</p>
        <p>Hair Color: {item.hair_color}</p>
        <p>Skin Color: {item.skin_color}</p>

      </div>
    )
  })
  :
  <div className="lds-dual-ring"></div>


  return(
    <div>
      {people}
    </div>
  )
}
export default Characters
