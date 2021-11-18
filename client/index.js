import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
// import { createStore, applyMiddleware, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { Provider } from 'react-redux'


import App from './components/App'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducers, composeEnhancers(
//   applyMiddleware(thunkMiddleware)
// ))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>    
      <App />
    </Router>,
    document.getElementById('app')
  )
})