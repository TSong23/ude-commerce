import React from 'react';
import {Link} from 'react-router-dom';

import './header.style.scss';

const Header = () => (

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
    </div>


  </div>
)

export default Header;