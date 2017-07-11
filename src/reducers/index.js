import { combineReducers } from 'redux'

import numberReducer from './number'
import usersReducer from './users'

export default combineReducers({
  number: numberReducer,
  users: usersReducer
})