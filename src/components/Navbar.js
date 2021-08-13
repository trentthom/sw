import React from 'react'

function Navbar() {
  return(
    <nav className='navLinks'>
      <a href={`/`}>Intro</a>
      <a className='navLinks' href={`/search`}>Search</a>
      <a className='navLinks' href={`/planets`}>Planets</a>
      <a className='navLinks' href={`/people`}>People</a>
      <a className='navLinks' href={`/new`}>New</a>
    </nav>
  )
}

export default Navbar
