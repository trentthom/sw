import React from 'react'

function Navbar() {
  return(
    <nav>
      <a className='navLinks' href={`/`}>Home</a>
      <a className='navLinks' href={`/planets`}>Planets</a>
      <a className='navLinks' href={`/people`}>People</a>
    </nav>
  )
}

export default Navbar
