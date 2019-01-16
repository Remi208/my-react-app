import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/App/';
import {rootReducer, initialState} from './store/form/reducer';
import ReduxComponent from './containers/ReduxComponent/';

const store = createStore(rootReducer, initialState);

render(
  <div className="wrapper">
    <App />
    <Provider store={store}>
      <ReduxComponent />
    </Provider>
  </div>,
  document.getElementById('root')
);