import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Prendas from './pages/Prendas'
import PrendaDetails from './pages/PrendaDetails';
import Error from './pages/Error'
import Admin from './pages/Admin';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/prendas' element={<Prendas/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/checkout' element={<Checkout/>}/>
       <Route path='/prendas/:id' element={<PrendaDetails/>}/>
       <Route path='/error' element={<Error/>}/>
       <Route path='/admin' element={<Admin/>}/>
       </Routes>
      </Router>
    
    </div>
  );
}

export default App;