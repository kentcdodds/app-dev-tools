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
          This is just a demo for DevTools.{' '}
          {window.devToolsEnabled ? (
            <>
              DevTools are enabled. The UI for the DevTools appears in the
              bottom left. Add{' '}
              <a href="/?dev-tools=false">
                "<code>?dev-tools=false</code>"
              </a>{' '}
              to the URL to explicitely disable them (though in production they
              are disabled by default)
            </>
          ) : (
            <>
              DevTools are disabled. Add{' '}
              <a href="/?dev-tools=true">
                "<code>?dev-tools=true</code>"
              </a>{' '}
              to the URL to explicitely enable them (though in development they
              are enabled by default). The DevTools UI will appear in the bottom
              left.
            </>
          )}
        </p>
        {process.env.NODE_ENV === 'production' ? (
          <p>
            Notice that these work even in production! But it doesn't cost
            anything to have them available for users who don't use them. Read
            the blog post to learn how.
          </p>
        ) : null}
        <p>
          <a href="https://github.com/kentcdodds/app-dev-tools">
            View Code on GitHub
          </a>
        </p>
        <p>
          Read{' '}
          <a href="https://kentcdodds.com/blog/make-your-own-dev-tools">
            the blog post.
          </a>
        </p>
        <p>
          Watch{' '}
          <a href="https://egghead.io/lessons/javascript-create-app-devtools-to-enhance-development-productivity?pl=kent-s-blog-posts-as-screencasts-eefa540c&af=5236ad">
            the video.
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
