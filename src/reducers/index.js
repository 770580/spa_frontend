import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import posts from './posts'
import postsForm from './postsForm'

export default combineReducers({
  posts,
  postsForm,
  routing: routerReducer
})
