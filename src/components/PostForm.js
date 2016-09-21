import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PostFormActions from '../actions/PostFormActions'
 
class PostForm extends React.Component {

  componentDidMount () {
    this.props.disableBtn()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  formInputs () {
    const title = this.refs.title.value.trim()
    const body = this.refs.body.value.trim()
    const username = this.refs.username.value.trim()
    return { title: title, body: body, username: username}
  }

  handleSubmit (e) {
    e.preventDefault()
    const { title, body, username } = this.formInputs()
    const { token } = this.props

    this.props.onPostSubmit({ title, body, username }, token)
    this.refs.form.reset()
    this.props.disableBtn()
    return
  }

  btnIsDisable () {
    const { title, body, username } = this.formInputs()
    if ( !title || !body || !username) {
      this.props.disableBtn()
    }
    else {
      this.props.enableBtn()
    }
  }

  render() {
    let disabled = this.props.disabled
    return (
      <form className="postForm" ref='form' onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={this.btnIsDisable.bind(this)}
          ref='title' />
        <input
          type="text"
          placeholder="Body"
          onChange={this.btnIsDisable.bind(this)}
          ref='body' />
        <input
          type="text"
          placeholder="Username"
          onChange={this.btnIsDisable.bind(this)}
          ref='username' />
        <input
          type="submit"
          value="Post"
          disabled={disabled} />      
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    disabled: state.postsForm.disabled,
    token: state.auth.token }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostFormActions, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
