
import './App.css';
import Login from './components/Login';
import Register from './components/Register';  
import Resetpassword from './components/Resetpassword';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (

    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='register' element={<Register/>}></Route>
      <Route path='resetpassword' element={<Resetpassword/>}></Route>
    </Routes>
  );
}

export default App;
