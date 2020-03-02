import React from 'react';
import { Route, Switch} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/signin-up.component';
import Header from './components/header/header.component';

// homepage url can be '/' using react route

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
// in order to have the user state, turn the App in to state component

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';


///////////////////////////////////////////////////////////////////////////////

/*

1.componentDidMount() => usually done to fetch data for users from backend
  but firebase does that for us

2.firebase authstatechanged
  firebase does session storage for us also. onAuthStateChanged does session
  set up actual safe persistence of users
  OAuth allows third party entry and makes user sign up easy

3.connect is for connecting this component to store
4. dispatch: letting redux know that what obj is passed is actually an action
   obj that needs to be passed to all reducers

*/




///////////////////////////////////////////////////////////////////////////////
class App extends React.Component {  

  unsubscribeFromAuth = null;

  componentDidMount(){
    // this is open subscription or messaging between app and firebase
    // as long APP component is mounted on DOM
    // using this subscription, get userAuth obj and ref and pass as props to createProfile

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot( snapShot => {
          // snapShot object sends only snapShot. we get full data after calling
          // .data() method on the snapShot obj
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        })
      };
      setCurrentUser(userAuth);
    });

    
  }

  componentWillUnmount() {
    //life cycle method. new
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div >
        
        <Header/>
        <Switch>

          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInPage} />
        </Switch>

      
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
