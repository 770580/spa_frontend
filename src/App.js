import 'whatwg-fetch'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Post from './Post'
import PostForm from './PostForm'
import * as PostActions from './actions/PostActions'
 
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
    fetch(process.env.URL_ENV)
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
  }

  handlePostSubmit (post) {
    fetch(process.env.URL_ENV, {
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
        <button onClick={this.props.postAction}>Test</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
