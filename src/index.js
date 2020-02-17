import loadDevTools from './dev-tools/load'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// load and install the dev tools (if they need to be)
// and when that's done, let's render the app
// NOTE: if we don't need to install the devtools, then the callback
// is called synchronously so there's no penalty for including this
// in production.
loadDevTools(() => {
  ReactDOM.render(<App />, document.getElementById('root'))
})
