import React from 'react'
import { render } from 'react-dom'
import App from './App'
 
render(
  <App url='http://54.213.196.176/api/posts' pollInterval={2000} />,
  document.getElementById('root')
);
