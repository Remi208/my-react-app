import {CHANGE_NAME, CHANGE_SECOND_NAME} from './action-types'
import Immutable from 'seamless-immutable';

export const initialState = Immutable({
  firstName: 'Firstname',
  secondName: 'Secondname',
});

export const rootReducer = (state = initialState, action) => {
  switch (action.type){
    case CHANGE_NAME: return {
      ...state,
      firstName: action.payload
    }
    case CHANGE_SECOND_NAME: return {
      ...state,
      secondName: action.payload
    }
    default:
      return state
  }
}