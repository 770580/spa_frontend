import React from 'react'
 
class PostForm extends React.Component {

  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    const title = this.refs.title.value.trim()
    const body = this.refs.body.value.trim()
    const username = this.refs.username.value.trim()

    if (!title || !body || !username) {
      return
    }

    this.props.onPostSubmit({ title: title, body: body, username: username })
    this.refs.form.reset()
    return
  }

  render() {
    return (
      <form className="postForm" ref='form' onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" ref='title' />
        <input type="text" placeholder="Body" ref='body' />
        <input type="text" placeholder="Username" ref='username' />
        <input type="submit" value="Post" />      
      </form>
    )
  }
}
 
export default PostForm
