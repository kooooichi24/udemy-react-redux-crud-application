import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value:  0 }

export default (state = initialState, action) => {
  switch (action) {
    case INCREMENT:
      return { value: state + 1 }
    case DECREMENT:
      return { value: state - 1 }
    default:
      return state
  }
}