import React, { PropTypes } from 'react'
 
class Post extends React.Component {

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

Post.propTypes = {
  posts: PropTypes.array.isRequired
}
 
export default Post
