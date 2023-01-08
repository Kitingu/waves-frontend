import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from './components/auth/login/Login';
import { Nav } from './components/nav/nav';
import Register from './components/auth/signup/Register';
import CreateWave from './components/waves/CreateWave';
import Waves from './components/waves/Waves';
import AuthState from './context/auth/authState';


function App() {
  return (
    <AuthState>
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
    </AuthState>
    
  );
}

export default App;
