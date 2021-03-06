import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
// import SignInPage from './pages/signin-up.component';
import Header from './components/header/header.component';

// homepage url can be '/' using react route

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
// in order to have the user state, turn the App in to state component

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import SignInAndSignUpPage from './pages/signin-up.component';
import Preview from './components/preview/preview.component';
import CollectionItem from './components/collection-item/collection-item.component';


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

5. using connect, we were able to seperate the header component from the app
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
      <div>        
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signin' render={() => 
            this.props.currentUser ? (<Redirect to='/' />) : <SignInAndSignUpPage/>
          } />

          <Route exact path='/shop' component={ShopPage} />
          <Route path='/shop/' component={Preview} /> 
        </Switch>      
      </div>
    );
  }
};

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
