function load(callback) {
  if (process.env.NODE_ENV === 'development') {
    import('./dev-tools')
      .then(mod => mod.install())
      .finally(callback)
  } else {
    callback()
  }
}

export default load
