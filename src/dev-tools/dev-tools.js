import React from 'react'
import ReactDOM from 'react-dom'

const requireDevToolsLocal = require.context(
  './',
  false,
  /dev-tools\.local\.js/,
)
const local = requireDevToolsLocal.keys()[0]
if (local) {
  requireDevToolsLocal(local)
}

async function install() {
  function DevTools() {
    return 'Hello from the devtools'
  }

  const devToolsRoot = document.createElement('div')
  document.body.appendChild(devToolsRoot)

  ReactDOM.render(<DevTools />, devToolsRoot)
}

export {install}
