function install(callback) {
  // this allows you to explicitly disable it in development for example
  const explicitlyDisabled =
    window.location.search.includes('dev-tools=false') ||
    window.localStorage.getItem('dev-tools') === 'false'

  // we want it enabled by default everywhere but production and we also want
  // to support the dev tools in production (to make us more productive triaging production issues).
  // you can enable the devtools via localStorage or the query string.
  if (
    !explicitlyDisabled &&
    (process.env.NODE_ENV !== 'production' ||
      window.location.search.includes('dev-tools=true') ||
      window.localStorage.getItem('dev-tools') === 'true')
  ) {
    // use a dynamic import so the dev-tools code isn't bundled with the regular
    // app code so we don't worry about bundle size.
    import('./dev-tools').then(() => {
      console.log('dev-tools installed')
      callback()
    })
  } else {
    // if we don't need the devtools, call the callback immediately.
    callback()
  }
}

export default install
