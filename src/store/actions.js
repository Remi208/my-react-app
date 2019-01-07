import {CHANGE_NAME} from '../index'

export const changeFirstName = (newFristName) => {
    return{
      type: CHANGE_NAME,
      payload: newFristName
    }
  }