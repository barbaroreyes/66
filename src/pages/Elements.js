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
const Buttons = styled.div`
width:100%;



`
const Button = styled.button`
width:300px;
padding:20px;
margin:30px;
font-size:22px;

`


const Elements = (props) => {
 
  
  return (<>
  <Buttons>
  <Button>Aretes</Button>
  <Button>Conjuntos</Button>
  <Button>Cadenas</Button>
  <Button>Esclavas</Button>
  <Button>Pulsos</Button>
  
  </Buttons>
            
           <Container>
      
      {props.ventas.map((item,i)=>{
        return (
          <Element
          {...item}
          />
        )
      })}
      
    </Container>
        </>
    
  )
}

export default Elements
