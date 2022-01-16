import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Loginpage from './pages/loginPage/LoginPage';
import Homepage from './pages/homepage/Homepage';


function App() {
  const token = localStorage.getItem('Htoken')
 console.log(token, 'testing')

  return (
    <div className="App">
      <Routes>
       
        <Route path = "/home" element = {token ? <Homepage/> : <Navigate to = "/login"/> } /> 
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </div>
  );
}

export default App;
