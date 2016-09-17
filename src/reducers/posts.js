import { GET_POSTS, ADD_POST, REMOVE_POST, SHOW_POST } from '../actions/PostActions'

const initialState = {
  posts: [],
  post: {}
} 
export default function posts( state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload }
    case ADD_POST: {
      const newPosts = state.posts.concat(action.payload)
      return { ...state, posts: newPosts }
    }
    case REMOVE_POST: {
      const id = action.payload
      const newPosts = state.posts.filter(e => e.id != id)
      return { ...state, posts: newPosts }
    }
    case SHOW_POST:
      return { ...state, post: action.payload }
  default:
    return state
  }
}
