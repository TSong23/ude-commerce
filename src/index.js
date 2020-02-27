import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { unregister } from './serviceWorker';
import { Provider } from 'react-redux';
  

import './index.css';
import App from './App';

//unregister service worker
unregister();

//provider allows all child components to Provider access the Redux store

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
 