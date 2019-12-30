import React from 'react';
import {Switc, Route, Switch} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage.component';

// homepage url can be '/' using react route

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
