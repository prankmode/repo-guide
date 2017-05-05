'use strict'

const store = require('../store.js')

const signUpSuccess = (response) => {
  // gameUi.toggleSignUpButton()
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (response) => {
  // store the user object
  store.user = response.user
  // gameUi.toggleSignInButton()
  // gameUi.toggleChangePasswordButton()
  // gameUi.toggleStatsButton()
  // gameUi.toggleSignOutButton()
}

const signInFailure = (error) => {
  console.error(error)
  store.user = null
}

const signOutFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (response) => {
  // clear store.user
  store.user = null
}

const isAnyoneLoggedIn = () => {
  if (store.user) {
    return true
  } else {
    return false
  }
}

module.exports = {
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  isAnyoneLoggedIn
}
