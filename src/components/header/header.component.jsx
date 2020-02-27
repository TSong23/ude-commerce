// connect is higher order component
// higher component is function that take in component and return new component
// use mstp and mdtp to have this component pull the correct information from the 
// redux store

import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


import { auth } from '../../firebase/firebase.utils';

import './header.style.scss';

const Header = ({currentUser}) => (

  <div className='header'>

    <Link className='logo-container' to='/'>
      Home Logo Filler
    </Link>

    <div className='options'>
      <Link to='/shop' className='option'>
        SHOP
      </Link>
      <Link to='/contact' className='option'>
        CONTACT
      </Link>
      {
        currentUser ? 
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      }
    </div>


  </div>
)

const mapStateToProps = (state) => ({
  currentUser : state.user.currentUser
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);