'use strict'

const store = require('../store.js')

const toggleSignUpButton = function () {
  $('#sign-up-button').toggleClass('hidden')
}

const toggleSignInButton = function () {
  $('#sign-in-button').toggleClass('hidden')
}
const toggleSignOutButton = function () {
  $('#sign-out-button').toggleClass('hidden')
}

const toggleChangePasswordButton = function () {
  $('#change-password-button').toggleClass('hidden')
}

const sayHi = function (toWho) {
  $('#hi-there-button')[0].innerText = 'Hi, ' + toWho + '!'
  $('#hi-there-button').toggleClass('hidden')
}

const hideHi = function () {
  $('#hi-there-button').toggleClass('hidden')
}

const addHandlers = () => {
  $('#all-repos').on('click', onShowRepos)
}

const showAlert = (message) => {
  alert(message)
}

module.exports = {
  addHandlers,
  toggleSignInButton,
  toggleSignUpButton,
  toggleSignOutButton,
  toggleChangePasswordButton,
  sayHi,
  hideHi,
  showAlert
}
