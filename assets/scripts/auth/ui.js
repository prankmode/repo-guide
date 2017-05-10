'use strict'

const store = require('../store.js')
const guideUi = require('../guide/ui.js')

const signUpSuccess = (response) => {
}

const signUpFailure = (error) => {
  console.error(error)
  guideUi.showAlert('cannot sign up')
}

const signInSuccess = (response) => {
  // store the user object
  store.user = response.user
  guideUi.toggleSignInButton()
  guideUi.toggleChangePasswordButton()
  guideUi.toggleSignOutButton()
  guideUi.toggleSignUpButton()
  guideUi.sayHi(store.user.email)
}

const signInFailure = (error) => {
  guideUi.showAlert('sign in failed')
  store.user = null
}

const signOutFailure = (error) => {
}

const signOutSuccess = (response) => {
  // clear store.user
  store.user = null
  guideUi.toggleSignInButton()
  guideUi.toggleSignOutButton()
  guideUi.toggleChangePasswordButton()
  guideUi.toggleSignUpButton()
  guideUi.hideHi()
  $('#repo-or-tag-list').html('')
}

module.exports = {
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
