import React from 'react';
 
class Post extends React.Component {
  render() {
    var postItems = this.props.posts.map(function(postItem) {
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
