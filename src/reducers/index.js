import { combineReducers } from 'redux'
import posts from './posts'
import postsForm from './postsForm'

export default combineReducers({
  posts,
  postsForm
})
