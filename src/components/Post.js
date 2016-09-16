import 'whatwg-fetch'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PostList from './PostList'
import PostForm from './PostForm'
import * as PostActions from '../actions/PostActions'
 
class Post extends React.Component {
  componentDidMount () {
     this.props.fetchPosts()
  }

  render() {
    return(
      <div>
        <PostList posts={ this.props.posts } onRemovePost={this.props.fetchRemovePost} />
        <PostForm onPostSubmit={this.props.fetchAddPost} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.posts }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)