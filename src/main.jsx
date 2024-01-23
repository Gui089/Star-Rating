import React from 'react'
import ReactDOM from 'react-dom/client'
/* import { StarRating } from './StarRating.jsx' */
import { App } from './StarRating.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App color="gold" size={60}/>
  </React.StrictMode>,
)
