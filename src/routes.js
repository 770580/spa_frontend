import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Post from './components/Post'
import OnePost from './components/OnePost'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Post} />
      <Route path='/posts' component={Post} />
      <Route path='/posts/:id' component={OnePost} />
    </Route>
  </div>
)