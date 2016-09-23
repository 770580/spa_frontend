import 'whatwg-fetch'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import Logout from '../components/Logout'
import * as PostActions from '../actions/PostActions'
 
class PostContainer extends React.Component {
  componentDidMount () {
     this.fetchPostsWithToken()
  }

  fetchPostsWithToken() {
    const token = this.props.token
    this.props.fetchPosts(token)
  }

  render() {
    return(
      <div>
        <Logout />
        <PostList
          posts={ this.props.posts }
          onRemovePost={this.props.fetchRemovePost}
          token={this.props.token}
        />
        <PostForm
          onPostSubmit={this.props.fetchAddPost}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)