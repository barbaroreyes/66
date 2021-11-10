import styled from 'styled-components';
import {ArrowLeftOutlined,ArrowRightOutlined} from '@material-ui/icons';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Data from '../compo/Data'

const Container = styled.div`
width: 100%; 
height:80vh;
display:flex;
position:relative;
overflow:hidden;


`;

const Arrow = styled.div`
width: 50px; 
height:50px;
background-color:#fff;
border-radius: 50%;
display:flex;
justify-content: center;
align-items: center;
position:absolute;
top:0; 
bottom:0;
left:${props => props.direction==="left" && "10px"};
right:${props => props.direction==="right" && '10px'};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;

`
const Wrapper = styled.div`
hight:100%;
display:flex;
justify-content: center;
align-items: center;
transition: all 2s ease;
transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
width: 100vw;
higthL100vh;
display:flex;
align-items: center;
align-items: center;
background-color:${props => props.bg};

`
const ImageContainer = styled.div`
flex:1;
height:100%;
`
const Image = styled.img`
height:50%;
`
const InfoConten = styled.div`
flex:1;
padding:50px;
`
const Title = styled.h1`font-size:70px`
const Description = styled.p`
margin: 50px 0px; 
font-size:20px;
font-weight:500;
letter-spacing:3px;
`
const Button = styled.button`
padding:30px;
background: black;
color: rgb(189,132,64);
border-radius:30px 30px;
width:30%;
cursor:pointer;
`


const Slider = () => {
    const history = useNavigate()
    const [slideIndex,setSlideIndex] = useState(0)
    const handleClick = (direction) => {
    if(direction ==='left'){
     setSlideIndex(slideIndex > 0 ?slideIndex -1 : 2)
    }else{
      setSlideIndex(slideIndex < 2 ?slideIndex +1 : 0)
    }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick('left')}>
            <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
              {Data.map((item)=>{
                return(
                  <Slide bg='rgb(189,132,64)'>
                  <ImageContainer>
                  <Image src={item.image}/>
                </ImageContainer>
                <InfoConten>
                    <Title>{item.name}</Title>
                    <Description>{item.description}</Description>
                    <Button onClick={()=> history('/login')}>Shop Now</Button>
              </InfoConten> 
              
                </Slide>
                )

              })}
         </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick('right')}>
            <ArrowRightOutlined/>
            </Arrow>
      
    </Container>
  );
}

export default Slider;
