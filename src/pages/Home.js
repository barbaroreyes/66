import React,{useState , useEffect} from 'react'
import styled from 'styled-components';
import Amplify ,{API , graphqlOperation } from "aws-amplify";
import {listVentas} from '../graphql/queries'
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'
import awsExport from '../aws-exports';
import Categorias from './Categorias'
Amplify.configure(awsExport)



const Container = styled.div`
width:100%;



`

const Home = (props) => {
 const [ventas ,setVentas] = useState([])

useEffect(()=>{
 fetchVentas()
},[])


 const fetchVentas = async () => {
   try {
     const dataList = await API.graphql(graphqlOperation(listVentas))
     const  listAll = dataList.data.listVentas.items;
     console.log('list',listAll)
     setVentas(listAll)
     
   } catch (error) {
     
   }
 }

  return (
    <Container >
     <AmplifySignOut/>
     <Categorias ventas={ventas}/>
    </Container>
  )
}

export default withAuthenticator( Home)
