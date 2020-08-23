import React, { useState } from 'react';
import '../src/css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch, Route } from "react-router-dom";

import Login from '../src/components/Login';
import Details  from '../src/components/Details';
import logo from './logo.svg';


function App() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  


  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path='/'>
            <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
              
            </Route>
            <Route path='/details'>
              <Details email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
            </Route>
          </Switch>
        </Router>
       
      </header>
    </div>
  );
}

export default App;
