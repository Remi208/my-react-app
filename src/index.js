import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {rootReducer, initialState} from './store/reducers'
import App from './components/App/'
import WrappedReduxComponent from './components/ReduxComponent/'

export const CHANGE_NAME = 'CHANGE_NAME';

const store = createStore(rootReducer, initialState);


render(
  <Provider store={store}>
    {/* <App /> */}
    <WrappedReduxComponent />
  </Provider>,
  document.getElementById('root')
);