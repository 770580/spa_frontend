import React from 'react';
 
class Post extends React.Component {
  static propTypes = {
    posts: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string
      })
    )
  };
  render() {
    let postItems = this.props.posts.map(function(postItem) {
      return (
        <div key={postItem.id}>
          <p><b>{postItem.name}</b></p>
          <p>{postItem.description}</p>
        </div>
      );
    });
    return (
      <div>
        {postItems}
      </div>
    );
  }
}
 
export default Post;
