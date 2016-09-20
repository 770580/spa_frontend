import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import posts from './posts'
import postsForm from './postsForm'
import auth from './auth'

export default combineReducers({
  posts,
  postsForm,
  auth,
  routing: routerReducer
})
