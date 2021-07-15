import React from 'react'

function PlanetCard(props){
  console.log(props)
  const card = props.planetData.map((item) => {
    return(
        <div key={item.name}className='planetCard'>
          <div>{item.name}</div>
          <div>Climate {item.climate}</div>
          <div>Diameter {item.diameter}</div>
        </div>
    )
  })
  return(
    <div className='planetCardDisplay'>
      {card}
    </div>
  )
}





export default PlanetCard
