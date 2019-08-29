import logo from './logo.svg';
import './App.css';
import './components/Navigator.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
import Navigator from './components/Navigator'
import Admission from './components/Admission'
import Attendance from './components/Attendance'
import Dropdown from './components/Dropdown3'

function App() {
  return (
    <Router>
        <div className="App">
          <Navigator />
          <Route exact path="/" component={Home} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <div className="App_body">
            <Route exact path="/attendance" component={Attendance} className="App_body" />
            </div>
            <Route exact path="/admission" component={Admission} />
          </div>
        </div>
      </Router>
  );
}

export default App;
