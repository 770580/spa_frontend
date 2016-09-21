//import { checkHttpStatus, parseJSON } from '../utils'
import { push } from 'react-router-redux'
//import jwtDecode from 'jwt-decode'

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
      status: error.response.status,
      statusText: error.response.statusText
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

/*export function logoutAndRedirect() {
  return (dispatch, state) => {
    dispatch(logout())
    dispatch(push('/login'))
  }
}*/

export function loginUser(cren) {
  return function(dispatch) {
    dispatch(loginUserRequest())
    return fetch('http://localhost:3000/user_token', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cren)
    })
    .then(response => response.json())
    .then(data => {
      dispatch(loginUserSuccess(data.jwt))
      dispatch(push('/posts'))
    }).catch(error => {
      dispatch(loginUserFailure(error))
    })
/*      method: 'post',
      crendentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        try {
          //let decoded = jwtDecode(response.token)
          dispatch(loginUserSuccess(response.token))
          dispatch(push(redirect))
        } catch (e) {
          dispatch(loginUserFailure({
            response: {
              status: 403,
              statusText: 'Invalid token'
            }
          }))
        }
      })
      .catch(error => {
        dispatch(loginUserFailure(error))
      })
    }*/
  }
}