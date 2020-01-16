import React from 'react'
import PropTypes from 'prop-types'

const App = ({ name }) =>
  <main id="app" className="flex justify-center">
    <h1 className="text-4xl">Hello, {name}!</h1>
  </main>

App.propTypes = {
  name: PropTypes.string
}

export default App
