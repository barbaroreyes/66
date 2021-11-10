import React from 'react'
import Categoria from '../compo/Categoria' ;
import styled from 'styled-components';

const Container = styled.div`
width:100%;
// height:80vh;
// display:flex;
display:flex;
flex-wrap: wrap;

`


const Categorias = ({ventas}) => {
  console.log('props in categoria', ventas)
//  const filtered = props.ventas.filter(item => item.categoria)
  
  return (
    <Container>
      Categoria
      {/* {filtered} */}
     {ventas.map((item , i)=>{
   return (
       <Categoria  
       key={i}
      {...item}/>
   )
     })}
    </Container>
  )
}

export default Categorias
