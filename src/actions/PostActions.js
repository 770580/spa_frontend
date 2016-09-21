export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const SHOW_POST = 'SHOW_POST'

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

export function removePost(id) {
  return {
    type: REMOVE_POST,
    payload: id
  }
}

export function showPost(post) {
  return {
    type: SHOW_POST,
    payload: post
  }
}

export function fetchPosts(token) {
  return dispatch => {
    fetch(process.env.URL_ENV, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => dispatch(getPosts(data)))
  }
}

export function fetchAddPost(post, token) {
  return dispatch => {
    fetch(process.env.URL_ENV, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(data => dispatch(addPost(data)))
  }
}

export function fetchRemovePost(id, token) {
  const url = process.env.URL_ENV + '/' + id
  return dispatch => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(dispatch(removePost(id)))
  }
}

export function fetchShowPost(id, token) {
  const url = process.env.URL_ENV + '/' + id
  return dispatch => {
    fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => dispatch(showPost(data)))
  }
}