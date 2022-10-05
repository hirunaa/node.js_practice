import React from 'react';
import LandingPage from './components/views/LandingPage/LandingPage.js'
import LoginPage from './components/views/LoginPage/LoginPage.js'
import RegisterPage from './components/views/RegisterPage/RegisterPage.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path="/Login" element={<LoginPage />}/> 
            <Route path="/Register" element={<RegisterPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

