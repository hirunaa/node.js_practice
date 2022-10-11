import React from 'react';
import LandingPage from './components/views/LandingPage/LandingPage.js'
import LoginPage from './components/views/LoginPage/LoginPage.js'
import RegisterPage from './components/views/RegisterPage/RegisterPage.js'
import  Auth  from './hoc/auth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link 
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path='/' component={Auth(LandingPage, null)} />
            <Route path="/Login" component={Auth(LoginPage, false)}/> 
            <Route path="/Register" component={Auth(RegisterPage, false)}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

