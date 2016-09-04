import React from 'react'
 
class Post extends React.Component {
  static propTypes = {
    posts: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        body: React.PropTypes.string,
        username: React.PropTypes.string.isRequired
      })
    )
  }

  render() {
    const postItems = this.props.posts.map((postItem) => {
      return (
        <div key={postItem.id}>
          <p><b>{postItem.title}</b></p>
          <p>{postItem.body}</p>
          <p>{postItem.username}</p>
        </div>
      )
    })
    return (
      <div>
        {postItems}
      </div>
    )
  }
}
 
export default Post
