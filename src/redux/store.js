// middleware catches actions, does something before passing on the actions to reducers
// redux logger will show us the changes made to store

// createStore takes root reducer and applymiddlewares in which we can spread in all middlewares

import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';


import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));


export default store;
