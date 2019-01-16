import {CHANGE_NAME, CHANGE_SECOND_NAME} from './action-types'

export const changeFirstName = (newFristName) => {
  return{
    type: CHANGE_NAME,
    payload: newFristName
  }
}

export const changeSecondName = (newSecondName) => {
  return{
    type: CHANGE_SECOND_NAME,
    payload: newSecondName
  }
}