import { GET_POSTS, ADD_POST } from '../actions/PostActions'

export default function posts( state = { posts: [] }, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload }
    case ADD_POST:
      return { ...state }
  default:
    return state
  }
}
