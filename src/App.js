import React,{useState , useEffect} from 'react'
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css';
import Amplify ,{API , graphqlOperation } from "aws-amplify";
import {listVentas} from './graphql/queries'
import awsExport from './aws-exports';
import Header from './compo/Header.js';
import Footer from './compo/Footer';
import Home from './pages/Home';
import Elements from './pages/Elements'
import LondingPage from './pages/LondingPage';
// import data from './compo/Data';
// import Prendas from './pages/Ventas'
// import VentaDetails from './pages/VentaDetails';
// import Error from './pages/Error'
// import Admin from './pages/Admin';
Amplify.configure(awsExport)

function App() {
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
    <div className="App">
      <Router>
      
      <Header/>
        <Routes>
       <Route path='/' element={<LondingPage/>}/>
       <Route path='/login' element={<Home ventas={ventas}/>}/>
       <Route path='/elements' element={<Elements ventas={ventas}/>}/>
       {/* <Route path='/elements/:id' element={<Element/>}/> */}
       {/* 
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/checkout' element={<Checkout/>}/>
       <Route path='/prendas/:id' element={<VentaDetails/>}/>
       <Route path='/error' element={<Error/>}/>
       <Route path='/admin' element={<Admin/>}/> */}
       </Routes>
      <Footer/>
      </Router>
    
    </div>
  );
}

export default App;