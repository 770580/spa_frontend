import React, { PropTypes } from 'react'
import {Link} from 'react-router'
 
class PostList extends React.Component {

  constructor (props) {
    super(props)
    this.handleRemovePost = this.handleRemovePost.bind(this)
  }

  handleRemovePost(e) {
    e.preventDefault()
    const id = Number(e.target.dataset.id)
    const { token } = this.props

    this.props.onRemovePost(id, token)
  }

  render() {
    const postItems = this.props.posts.map((postItem) => {
      return (
       <div key={postItem.id}>
          <p>
            <b>
              <Link to={'/posts/' + postItem.id}>
                {postItem.title}
              </Link>
            </b>
          </p>
          <p>
            {postItem.body}
          </p>
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

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}
 
export default PostList
