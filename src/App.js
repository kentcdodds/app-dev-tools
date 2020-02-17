import React from 'react'
import featureToggles from './feature-toggles'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {featureToggles.tacos ? (
          <span className="App-logo" role="img" aria-label="taco">
            🌮
          </span>
        ) : (
          <img src={logo} className="App-logo" alt="logo" />
        )}
        <a
          className="App-link"
          href={
            featureToggles.tacos
              ? 'https://en.wikipedia.org/wiki/Taco'
              : 'https://reactjs.org'
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about {featureToggles.tacos ? ' Tacos' : ' React'}
        </a>
        <p>
          This is just a demo for DevTools. To enable the DevTools (even in
          production), add "<code>?dev-tools=true</code>" to the URL. Then
          you'll find the DevTools on the bottom-left.
        </p>
        <p>
          <a href="https://github.com/kentcdodds/app-dev-tools">
            View Code on GitHub
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
