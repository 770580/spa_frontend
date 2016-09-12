export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'

export function getPosts(posts) {
  return {
    type: GET_POSTS,
    payload: posts
  }
}

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: post
  }
}

export function fetchPosts() {
  return dispatch => {
    fetch(process.env.URL_ENV)
      .then(response => response.json())
      .then(data => dispatch(getPosts(data)))
  }
}

export function fetchAddPost(post) {
  return dispatch => {
    fetch(process.env.URL_ENV, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(data => dispatch(addPost(data)))
  }
}