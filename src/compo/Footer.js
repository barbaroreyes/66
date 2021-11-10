import React from 'react';
import style from 'styled-components';

const Container = style.div`
border:1px solid black;
width: 100%;
height: 11vh;
display:flex;
justify-content: center;
flex-direction: row;
align-items: center;
`
const Container1 = style.div`
width:33%;
`
const Foorer = ({ventas}) => {
  return (
    <Container>
     {ventas.map((item, i)=>{
       return (
         <Container1>
           {item.name}
           {/* <img width="100%" height="310vh"src={item.image} alt=''/> */}
         </Container1>
       )
     })}
    </Container>
  )
}

export default Foorer
