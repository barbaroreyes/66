import React from 'react'
import {Link} from 'react-router-dom'
import style from 'styled-components';

const Container = style.div`
width:40%;
display:flex;
justify-content: space-around;
border:1px solid
padding:50px;
`


const Nav = () => {
  return (
    <Container>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/elements'>Products</Link>
      <Link to='/cart'>Cart</Link>

    </Container>
  )
}

export default Nav
