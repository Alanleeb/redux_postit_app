import { combineReducers } from 'redux'
import postit from './postit'
import nextId from './nextId'
import filter from './filter'

const rootReducer = combineReducers({
  postit,
  nextId,
  filter,
})

export default rootReducer
