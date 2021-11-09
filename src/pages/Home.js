import React,{useState , useEffect} from 'react'
import Amplify ,{API , graphqlOperation } from "aws-amplify";
import {listVentas} from '../graphql/queries'
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'
import awsExport from '../aws-exports';
import Categorias from './Categorias'
Amplify.configure(awsExport)

const Home = () => {
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
    <div syle={{color:'red'}}>
     <AmplifySignOut/>
     <Categorias/>
    </div>
  )
}

export default withAuthenticator( Home)
