import React from 'react'
import { render } from 'react-dom'
import App from './App'
 
render(
  <App url={process.env.URL_ENV} pollInterval={2000} />,
  document.getElementById('root')
);
