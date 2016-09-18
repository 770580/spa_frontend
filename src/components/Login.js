import React from 'react'

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.loginSubmit = ::this.loginSubmit
  }

  loginSubmit(e) {
    e.preventDefault()
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

export default Login
