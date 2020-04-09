import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export function readEvents() {
  return async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    
    dispatch({ type: READ_EVENTS, response })
  }
}

export function postEvent(value) {
  return async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, value)
    dispatch({ type: CREATE_EVENT, response })
  }
}

export function deleteEvent(id) {
  return async dispatch => {
    await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch({ type: DELETE_EVENT, id })
  }
}

export function getEvent(id) {
  return async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch({ type: READ_EVENT, response })
  }
}

export function putEvent(value) {
  return async dispatch => {
    const response = await axios.put(`${ROOT_URL}/events/${value.id}${QUERYSTRING}`,value)
    dispatch({ type: UPDATE_EVENT, response })
  }
}