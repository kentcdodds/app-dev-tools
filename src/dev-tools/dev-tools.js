import './dev-tools.css'
import featureToggles, {enable, disable} from './feature-toggles'
import React from 'react'
import ReactDOM from 'react-dom'

console.log('in dev-tools.js')
// load local dev tools if it's there
// NOTE: this is using some webpack-sepecific features.
// if you're not using webpack, you might consider using
// https://npm.im/preval.macro or https://npm.im/codegen.macro
const requireDevToolsLocal = require.context(
  './',
  false,
  /dev-tools\.local\.js/,
)
const local = requireDevToolsLocal.keys()[0]
let LocalDevTools
if (local) {
  LocalDevTools = requireDevToolsLocal(local).default
}
LocalDevTools = LocalDevTools || (() => null)

function DevTools() {
  return (
    <div id="dev-tools">
      <div>🛠</div>
      <div className="tools">
        <LocalDevTools />
        <Tool1 />
      </div>
    </div>
  )
}

function Tool1() {
  const [tacos, setTacos] = React.useState(featureToggles.tacos)

  React.useEffect(() => {
    if (tacos) {
      enable('tacos')
    } else {
      disable('tacos')
    }
  }, [tacos])

  return (
    <div>
      <label>
        Enable Tacos:{' '}
        <input
          type="checkbox"
          checked={tacos}
          onChange={e => setTacos(e.target.checked)}
        />
      </label>
    </div>
  )
}

// add dev tools UI to the page
const devToolsRoot = document.createElement('div')
document.body.appendChild(devToolsRoot)
ReactDOM.render(<DevTools />, devToolsRoot)
