import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import { Nav } from './components/nav/nav';
import Register from './components/auth/Register';
import CreateWave from './components/waves/CreateWave';
import Waves from './components/waves/Waves';

function App() {
  return (
    <div className="App ">
    <Router>
    <Nav/> 
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/create' element={<CreateWave/>}/>
    <Route path='/waves' element={<Waves/>}/>
    </Routes>
    </Router>
    
    </div>
    
  );
}

export default App;
