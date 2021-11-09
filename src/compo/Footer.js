import React from 'react';

import style from 'styled-components';

const Container = style.div`
border:1px solid black;
width: 100%;
height: 10vh;
display:flex;
justify-content: space-between;
`

const Foorer = () => {
  return (
    <Container>
      footer
    </Container>
  )
}

export default Foorer
