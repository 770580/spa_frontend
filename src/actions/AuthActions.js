import { push } from 'react-router-redux'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGOUT_USER = 'LOGOUT_USER'

export function loginUserSuccess(token) {
  localStorage.setItem('token', token)
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      token: token
    }
  }
}

export function loginUserFailure(error) {
  localStorage.removeItem('token')
  return {
    type: LOGIN_USER_FAILURE,
    payload: {
      status: error.response
    }
  }
}

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST
  }
}

export function logout() {
  localStorage.removeItem('token')
  return {
    type: LOGOUT_USER
  }
}

export function logoutAndRedirect() {
  return dispatch => {
    dispatch(logout())
    dispatch(push('/login'))
  }
}

export function loginUser(creds) {
  return function(dispatch) {
    dispatch(loginUserRequest())
    return fetch(process.env.AUTH_URL, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds)
    })
    .then(response => response.json())
    .then(data => {
      dispatch(loginUserSuccess(data.jwt))
      dispatch(push('/posts'))
    }).catch(error => {
      dispatch(loginUserFailure(error))
      dispatch(push('/login'))
    })
  }
}