import React , {useEffect,useState} from 'react'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Amplify , {API , graphqlOperation} from 'aws-amplify';
import awsExport from './aws-exports'
import Home from './Home'
Amplify.configure(awsExport)

function App() {
  return (
    <div className="App">
     <Router>
       <Routes >
         <Route path='/' element={<Home/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
