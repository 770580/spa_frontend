import React, { PropTypes } from 'react'
 
class Post extends React.Component {

  constructor (props) {
    super(props)
    this.handleRemovePost = this.handleRemovePost.bind(this)
  }

  handleRemovePost(e) {
    e.preventDefault()
    const id = Number(e.target.dataset.id)
    this.props.onRemovePost(id)
  }

  render() {
    const postItems = this.props.posts.map((postItem) => {
      return (
       <div key={postItem.id}>
          <p><b>{postItem.title}</b></p>
          <p>{postItem.body}</p>
          <p>
            {postItem.username}
            <button data-id={postItem.id} onClick={this.handleRemovePost}>
              Remove
            </button>
          </p>
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
