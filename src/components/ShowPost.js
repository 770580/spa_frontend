import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as PostActions from '../actions/PostActions'
 
class ShowPost extends React.Component {
  componentDidMount () {
    const id = this.props.params.id
    this.props.fetchShowPost(id)
  }
  render() {
    const post = this.props.posts
    return(
      <div>
        <Link to='/'>На главную</Link>
        <div>
          <p><b>{post.title}</b></p>
          <p>{post.body}</p>
          <p>{post.username}</p>
        </div>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.post }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPost)