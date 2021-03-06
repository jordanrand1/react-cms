import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';
import Navbar from './Navbar';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </>
    );
  }
}

export default App;
