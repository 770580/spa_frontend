import 'whatwg-fetch'
import React from 'react'
import Post from './Post'
import PostForm from './PostForm'
 
class App extends React.Component {

  constructor (props) {
    super(props)
    this.handlePostSubmit = this.handlePostSubmit.bind(this)
    this.state = { posts: [] }
  }

  componentDidMount () {
    this.loadPosts()
    setInterval(() => this.loadPosts(), this.props.pollInterval)
  }

  loadPosts () {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
  }

  handlePostSubmit (post) {
    fetch(this.props.url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(data => this.setState({ posts: data }))
  }

  render() {
    return(
      <div>
        <Post posts={this.state.posts} />
        <PostForm onPostSubmit={this.handlePostSubmit} />
      </div>
    )
  }
}
 
export default App
