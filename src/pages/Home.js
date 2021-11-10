import React,{useState , useEffect} from 'react'
import styled from 'styled-components';

import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'

import Categorias from './Categorias';
import data from '../compo/Data';
// Amplify.configure(awsExport)



const Container = styled.div`
width:100%;
height: 80vh;


`

const Home = ({ventas}) => {
//  const [ventas ,setVentas] = useState([])

// useEffect(()=>{
//  fetchVentas()
// },[])


//  const fetchVentas = async () => {
//    try {
//      const dataList = await API.graphql(graphqlOperation(listVentas))
//      const  listAll = dataList.data.listVentas.items;
//      console.log('list',listAll)
//      setVentas(listAll)
     
//    } catch (error) {
     
//    }
//  }

  return (
    <Container >
     <AmplifySignOut/>
     <Categorias 
     ventas={ventas}
    
     />
    </Container>
  )
}

export default withAuthenticator( Home)
