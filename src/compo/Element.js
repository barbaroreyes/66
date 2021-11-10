import React from 'react'

import styled from 'styled-components';
import {useParams} from  'react-router-dom';

const Container = styled.div`
width:450px;
height:40vh;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
border:1px solid;
margin :70px;
`
const Element = (props) => {

    
  return (
    <Container>
       <h3>{props.name}</h3>
       <img width="100%" height="470vh" src={props.image} alt=''/>
    </Container>
  )
}

export default Element
