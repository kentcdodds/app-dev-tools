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
      </header>
    </div>
  )
}

export default App
