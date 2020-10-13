import React from 'react';
import Landing from './Landing.js'
import './App.css';
import Header from './Header.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/">  
          <Landing />
      </Route>
    </Router>
  );
}
export default App;


