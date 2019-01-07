import {CHANGE_NAME} from '../index'

export const initialState = {
    firstName: 'Firstname',
  }
  
export const rootReducer = (state = initialState, action) => {
    switch (action.type){
      case CHANGE_NAME:
        return {
          ...state,
          firstName: action.payload
        }
    }
    return state;
  }