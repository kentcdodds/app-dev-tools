import installDevTools from './dev-tools/install'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// install the dev tools (if they need to be installed)
// and when that's done, let's render the app
// NOTE: if we don't need to install the devtools, then the callback
// is called synchronously so there's no penalty for including this
// in production.
installDevTools(() => {
  ReactDOM.render(<App />, document.getElementById('root'))
})
