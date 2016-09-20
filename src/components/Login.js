import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AuthActions from '../actions/AuthActions'

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.loginSubmit = ::this.loginSubmit
  }

  loginSubmit(e) {
    e.preventDefault()
    const name = this.refs.name.value.trim()
    const password = this.refs.password.value.trim()
    const redirectTo = this.props.location.query.next || '/login'

    this.props.loginUser(name, password, redirectTo)
    this.refs.form1.reset()
  }

  render() {
    return (
      <form ref='form1' onSubmit={this.loginSubmit}>
        <input
          type='text'
          placeholder='Name'
          ref='name' />
        <input
          type='password'
          placeholder='Password'
          ref='password' />
        <input
          type='submit'
          value='Login' />
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticating: state.auth.isAuthenticating,
    statusText: state.auth.statusText
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuthActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
