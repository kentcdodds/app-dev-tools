// if you want to have custom dev tools, create a file right here called
// dev-tools.local.js.
// because the .gitignore lists *.local.* as ignored you can change anything
// you want in your local dev-tools file and it won't impact anyone else.

// Here's an example of some of the things you could do:
import React from 'react'
import {screen, waitForElementToBeRemoved} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {enable} from './feature-toggles'

// If I want to make sure that tacos is always enabled locally, I can uncomment this:
enable('tacos')

// you can do whatever hackery you want in here.
// Like you could use React Testing Library to fill out the username add password on load:
async function automaticallyLogin() {
  try {
    await userEvent.type(await screen.findByLabelText(/username/i), 'FAKE_USER')
    await userEvent.type(
      await screen.findByLabelText(/password/i),
      'FAKE_PASSWORD',
    )
    await userEvent.click(await screen.findByText(/submit/i))
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i))
  } catch (error) {
    //ignore the error because we're probably already logged in so no need
  }
}

automaticallyLogin()

// in the past I'd also have a history listener that would automatically execute
// code when I navigated to a specific path (to auto-fill a large form I was
// working on).

// This is an optional component I can export to add a tool to the DevTools UI
export default () => <div>Local dev tools!</div>
