import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import style from 'styled-components';

const Container = style.div`
border:1px solid black;
width: 100%;
height: 3vh;
display:flex;
justify-content:space-around;
flex-direction:row;
align-items:center;
`


const Header = () => {
  return (
    <Container>
      <Logo/>
      <Nav/>
    </Container>
  )
}

export default Header
