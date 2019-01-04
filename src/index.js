import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';

import App from './components/App/'

const initialState = {
  firstName: 'brotherman',
  secondName: 'Bill'
}

const rootReducer = (state = initialState, action) => {
  return state;
}

// function reducer(state, action){
//   switch (action.type){
//     case 'CHANGE_NAME':
//       return {
//         ...state,
//         firstName: action.payload
//       }
//   }
//   return state;
// }

const store = createStore(rootReducer, initialState);


const CHANGE_NAME = 'CHANGE_NAME';

const changeFirstName = {
  type: CHANGE_NAME,
  payload: null
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    firstName: state.firstName,
    secondName: state.secondName
  }
}

const WrappedApp = connect(mapStateToProps)(App);

store.dispatch(changeFirstName);

render(
  <Provider store={store}>
    <WrappedApp />
  </Provider>,
  document.getElementById('root')
);