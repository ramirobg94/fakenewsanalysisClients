import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import { Provider } from 'react-redux';

import Verum from './components/index';
const store = configureStore();

ReactDOM.render(<Provider store={ store }><Verum/></Provider>,
  document.getElementById('app'));