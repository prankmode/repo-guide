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
  console.log('auth:ui:signInSuccess')
  store.user = response.user
  console.log('auth:ui:signInSuccess, store.user is ', store.user)
  // gameUi.toggleSignInButton()
  // gameUi.toggleChangePasswordButton()
  // gameUi.toggleStatsButton()
  // gameUi.toggleSignOutButton()
}

const signInFailure = (error) => {
  console.log('auth:ui:signInFailure')
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


module.exports = {
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
