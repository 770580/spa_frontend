import React from 'react'
import { render } from 'react-dom'
import App from './App'
 
render(
  <App url='http://localhost:3000/api/posts' pollInterval={2000} />,
  document.getElementById('root')
);
