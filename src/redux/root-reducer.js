// root reducer combines all other states together and makes the single source

 import {combineReducers} from 'redux';

 import userReducer from './user/user-reducer';
 import cartReducer from './cart/cart.reducer';

 export default combineReducers({
   user: userReducer,
   cart: cartReducer
 })