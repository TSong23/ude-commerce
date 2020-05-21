import React from 'react';
import './cart-icon.styles.scss';

import {connect} from 'react-redux';
import toggleCartHidden from '../../redux/cart/cart.actions';


const CartIcon = ({toggleCartHidden}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <h1 className='shopping-icon'></h1>
    <span className='item-count'>Cart</span>

  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(
  null, 
  mapDispatchToProps
)(CartIcon);