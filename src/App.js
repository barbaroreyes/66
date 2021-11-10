import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css';
// import Checkout from './pages/Checkout';
import Header from './compo/Header.js';
import Footer from './compo/Footer';
// import Cart from './pages/Cart';
import Home from './pages/Home';
import Elements from './pages/Elements'
import Element from './compo/Element'
import LondingPage from './pages/LondingPage';
import data from './compo/Data';
// import Prendas from './pages/Ventas'
// import VentaDetails from './pages/VentaDetails';
// import Error from './pages/Error'
// import Admin from './pages/Admin';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <header style={{border: '1px solid',with:'100%',height:'10vh'}}>hello</header> */}
      <Header/>
        <Routes>
       <Route path='/' element={<LondingPage/>}/>
       <Route path='/login' element={<Home data={data}/>}/>
       <Route path='/elements' element={<Elements/>}/>
       <Route path='/elements/:id' element={<Element/>}/>
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