import React from 'react'
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
width: 590px;
margin: 50px;
 height:20vh;
display:flex;
justify-content:center;
flex-direction:row;
align-items:center;
border:4px solid;

`
const Image = styled.img`
width: 100%;


`
const ImageContainer = styled.div`
display:flex;
width: 50%;
height:20vh;
border:1px solid;
box-sizing: border-box;
`
const H1 = styled.h1`
width:50%;
`
const Categoria = (props) => {
  console.log('props in cate',props.ventas)
const history = useNavigate()

    // const filtered = new Set([...props.ventas.map(item => item.categoria)])
    // console.log('filtered',filtered)
  return (
    <Container onClick={()=> history('/elements')}>
     <H1>{props.categoria}</H1>
     <ImageContainer>
     <Image src={props.image}/>
     </ImageContainer>
     
    </Container>
  )
}

export default Categoria
