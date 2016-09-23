import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { routes } from './routes'
import { loginUserSuccess } from './actions/AuthActions'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

let token = localStorage.getItem('token')
if (token !== null) {
    store.dispatch(loginUserSuccess(token))
}

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
