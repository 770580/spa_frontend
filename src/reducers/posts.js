import { GET_POSTS, ADD_POST } from '../actions/PostActions'

export default function posts( state = { posts: [] }, action) {
  switch (action.type) {
    case GET_POSTS: {
      console.log ({posts})
      return { ...state, posts: action.payload }
    }
    case ADD_POST: {
      const newPosts = state.posts.concat(action.payload)
      return { ...state, posts: newPosts }
    }
  default:
    return state
  }
}
