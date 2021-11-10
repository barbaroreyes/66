import React from 'react'

import styled from 'styled-components';
import {useParams,useNavigate} from  'react-router-dom';

const Container = styled.div`
width:450px;
height:50vh;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
border:1px solid;
margin :70px;
padding:20px;
`
const Span = styled.span`
margin:30px;
`

const Element = (props) => {
const navigate =useNavigate()

    
  return (
    <Container onClick={()=>{navigate('/ventadetails')}}>
       <h3>{props.name}</h3>
       <img width="100%" height="490vh" src={props.image} alt=''/>
       <Span>${props.price}</Span>
    </Container>
  )
}

export default Element
