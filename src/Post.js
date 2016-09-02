import React from 'react';
import 'whatwg-fetch';
 
class Post extends React.Component {
//  static propTypes = {
//    posts: React.PropTypes.arrayOf(
//      React.PropTypes.shape({
//        id: React.PropTypes.number.isRequired,
//        name: React.PropTypes.string.isRequired,
//        description: React.PropTypes.string
//      })
//    )
//  };
  constructor(props){
    super(props) // обязательно должен быть вызван родительский метод
    this.state = {
      posts: []
    }
  }

  loadPostsFromServer() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({posts: data}) )
  }

  componentDidMount() {
    this.loadPostsFromServer();
    setInterval(this.loadPostsFromServer.bind(this), this.props.pollInterval);
  }

  render() {
    let postItems = this.state.posts.map(function(postItem) {
      return (
        <div key={postItem.id}>
          <p><b>{postItem.title}</b></p>
          <p>{postItem.body}</p>
          <p>{postItem.username}</p>
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
