import React from 'react';
import { Route, Switch} from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';

// homepage url can be '/' using react route

function App() {
  return (
    <div >
      
      <Header/>
      <Switch>

        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />

      </Switch>

    
    </div>
  );
}

export default App;
