import { ADD_POST } from '../actions/PostActions'

export default function posts(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case ADD_POST:
      console.log('Hello redux!')
      return { count: count + 1 }
  default:
    return state
  }
}
