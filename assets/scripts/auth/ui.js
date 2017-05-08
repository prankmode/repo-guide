'use strict'

const store = require('../store.js')
const guideUi = require('../guide/ui.js')

const signUpSuccess = (response) => {
  guideUi.toggleSignUpButton()
}

const signUpFailure = (error) => {
  console.error(error)
  showAlert("cannot sign up")
}

const signInSuccess = (response) => {
  // store the user object
  console.log('auth:ui:signInSuccess')
  store.user = response.user
  console.log('auth:ui:signInSuccess, store.user is ', store.user)
  guideUi.toggleSignInButton()
  guideUi.toggleChangePasswordButton()
  guideUi.toggleSignOutButton()
  guideUi.toggleSignUpButton()
  guideUi.sayHi(store.user.email)
}

const signInFailure = (error) => {
  console.log('auth:ui:signInFailure')
  console.error(error)
  guideUi.showAlert("sign in failed")
  store.user = null
}

const signOutFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (response) => {
  // clear store.user
  store.user = null
  guideUi.toggleSignInButton()
  guideUi.toggleSignOutButton()
  guideUi.toggleChangePasswordButton()
  guideUi.toggleSignUpButton()
  guideUi.hideHi()

}

module.exports = {
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
