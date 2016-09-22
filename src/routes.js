import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import PostContainer from './containers/PostContainer'
import Post from './components/Post'
import NotFound from './components/NotFound'
import Login from './components/Login'
import {requireAuthentication} from './components/AuthenticatedComponent'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Login} />
      <Route path='/login' component={Login} />
      <Route path='/posts' component={requireAuthentication(PostContainer)} />
      <Route path='/posts/:id' component={requireAuthentication(Post)} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)
