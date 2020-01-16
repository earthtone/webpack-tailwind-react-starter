import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'
// import render from 'react-test-renderer'

test('greet a given name', () => {
  const name = 'World'
  const { getByText } = render(
    <App name={name}/>
  )

  expect(getByText(/Hello, World!/)).toBeTruthy()
})
