import React from 'react';
import { Route, Switch} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/signin.component';
import Header from './components/header/header.component';

// homepage url can be '/' using react route

import {auth} from './firebase/firebase.utils';
// in order to have the user state, turn the App in to state component

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  //componentDidMount() => usually done to fetch data for users from backend
  // but firebase does that for us
  // firebase authstatechanged
  // firebase does session storage for us also. onAuthStateChanged does session 
  // set up actual safe persistence of users
  // OAuth allows third party entry and makes user sign up easy
  componentDidMount(){
    // this is open subscription or messaging between app and firebase
    // as long APP component is mounted on DOM
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    });

    
  }

  componentWillUnmount() {
    //life cycle method. new
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div >
        
        <Header currentUser={this.state.currentUser}/>
        <Switch>

          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInPage} />
        </Switch>

      
      </div>
    );
  }
}

export default App;
