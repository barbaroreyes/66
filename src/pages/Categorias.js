import React from 'react'
import Categoria from '../compo/Categoria' ;
import styled from 'styled-components';

const Container = styled.div`
width:100%;
display:flex;
flex-wrap: wrap;
justify-content: center;
border:1px solid;
margin-top:100px;
`
const H1 = styled.h1`
width:100%;
`

const Categorias = (props) => {
  

  return (
    <Container>
      <H1>Categorias</H1>
      {props.ventas.map((item,i)=>{
       return (<Categoria 
        
        {...item}
        />)
      })}
       
    </Container>
  )
}

export default Categorias
