import { combineReducers } from 'redux'
import { reducer as formReduceer } from 'redux-form'
import events from './events'

export default combineReducers({
  events,
  form: formReduceer
})