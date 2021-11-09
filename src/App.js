import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css';
// import Checkout from './pages/Checkout';
import Header from './compo/Header.js';
import Footer from './compo/Footer';
// import Cart from './pages/Cart';
import Home from './pages/Home';
import LondingPage from './pages/LondingPage';
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
       <Route path='/login' element={<Home/>}/>
       {/* <Route path='/home' element={<Home/>}/>
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