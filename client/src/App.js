import React from 'react';
import LandingPage from './components/views/LandingPage/LandingPage.js'
import LoginPage from './components/views/LoginPage/LoginPage.js'
import RegisterPage from './components/views/RegisterPage/RegisterPage.js'
//import  Auth  from './hoc/auth'
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
            <Route exact path='/' component={LandingPage} />
            <Route path="/Login" component={LoginPage}/> 
            <Route path="/Register" component={RegisterPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

