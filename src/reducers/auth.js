import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER} from '../actions/AuthActions'

const initialState = {
    token: null,
    isAuthenticated: false,
    isAuthenticating: false
}

export default function auth( state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        'isAuthenticating': true
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        'isAuthenticating': false,
        'isAuthenticated': true,
        'token': action.payload.token
      }
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        'isAuthenticating': false,
        'isAuthenticated': false,
        'token': null
      }
    case LOGOUT_USER:
      return {
        ...state,
        'isAuthenticated': false,
        'token': null
      }
  default:
    return state
  }
}