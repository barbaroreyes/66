import React from 'react';
import Element from '../compo/Element'
import styled from 'styled-components';
import {useParams} from  'react-router-dom'
const Container = styled.div`
width:100%;
height:80vh;


`


const Elements = (props) => {
 

  return (
    <Container>
       <Element/>
    </Container>
  )
}

export default Elements
