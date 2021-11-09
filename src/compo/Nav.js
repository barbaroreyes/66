import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/ventas'>Products</Link>
      <Link to='/cart'>Cart</Link>

    </div>
  )
}

export default Nav
