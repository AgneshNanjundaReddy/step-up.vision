import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider} from 'react-redux';
import Router from './Router';
import {reducer} from './reducer';

import './App.css';

const store = createStore(
  combineReducers({reducer})
)

function App() {
  return (
    <Provider store = {store}>
      <Router>
      </Router>
    </Provider>
  );
}

export default App;
