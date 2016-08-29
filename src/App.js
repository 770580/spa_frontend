import React from 'react';
import Post from './Post';
import PostForm from './PostForm';

var posts = [
  { id: 1,
    name: 'Сегодня уже сегодня',
    description: 'Кто-то разлил масло.'
  },
  { id: 2,
    name: 'Завтра будет завтра',
    description: 'Примус будет починен.'
  }
]
 
class App extends React.Component {
  render() {
    return(
      <div>
        <Post posts={posts} />
        <PostForm />
      </div>
    );
  }
}
 
export default App;
