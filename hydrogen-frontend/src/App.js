import './App.css';
import {Routes, Route} from 'react-router-dom'
import Loginpage from './pages/loginPage/LoginPage';
import Homepage from './pages/homepage/Homepage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/login" element = {<Loginpage/>} />
        <Route path = "/" element = {<Homepage/>} />
      </Routes>
    </div>
  );
}

export default App;
