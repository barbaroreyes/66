import React from 'react'
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
width: 13%;
height:300px;
display:flex;
flex-wrap: wrap;
margin:10px;
border:1px solid;

`


const Categoria = (props) => {
const history = useNavigate()
  return (
    <Container onClick={()=> history('/elements')}>
     { props.categoria}
    </Container>
  )
}

export default Categoria
