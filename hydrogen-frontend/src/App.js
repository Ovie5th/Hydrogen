import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loginpage from './pages/loginPage/LoginPage';
import Homepage from './pages/homepage/Homepage';
import LandingPage from './pages/landingpage/LandingPage';
import {useEffect, useState} from 'react'

function App() {
  const [token, setToken] = useState('')
  useEffect(()=>{
    const access_token = localStorage.getItem('Htoken');
    setToken(access_token)
  },[])
  

  return (
    <Switch>
      <Route path="/" exact >
        <LandingPage />
      </Route>
      <Route path="/dashboard" exact>
        {(token !== "" )? <Homepage /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login" exact>
        <Loginpage />
      </Route>
    </Switch>
  );
}

export default App;
