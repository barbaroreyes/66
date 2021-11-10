import React from 'react';
import Element from '../compo/Element'
import styled from 'styled-components';
import {useParams} from  'react-router-dom'
const Container = styled.div`
width:100%;
// height:90vh;
display:flex;
flex-wrap:wrap;


`


const Elements = (props) => {
 
  
  return (
    <Container>
      {props.ventas.map((item,i)=>{
        return (
          <Element
          {...item}
          />
        )
      })}
      
    </Container>
  )
}

export default Elements
