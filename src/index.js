import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { unregister } from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';  

import './index.css';
import App from './App';

//unregister service worker
unregister();

//provider is component class that passes Redux store object context
// to all child components or rest of the application 
 
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
 