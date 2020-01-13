import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
