import React from 'react';
import {Switc, Route, Switch} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';

// homepage url can be '/' using react route

function App() {
  return (
    <div >
  
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />

    
    </div>
  );
}

export default App;
