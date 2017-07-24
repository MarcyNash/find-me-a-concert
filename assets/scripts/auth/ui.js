'use strict'

const store = require('../store')
const profile = require('./../profile/api')
// const profileUI = require('./../profile/ui')

const signUpSuccess = () => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  $('#sign-up-close').click()
  $('#sign-up').trigger('reset')
  // $('#sign-up-btn').prop('disabled', true)
  // $('#notifications').text('Sign Up succeeded. Please log in to play Tic-Tac-Toe.')
}

const signUpFailure = (error) => {
  $('#sign-up-close').click()
  $('#sign-up').trigger('reset')
  $('div#statusBar').text('Sign Up failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const signInSuccess = (data) => {
  $('#sign-in-close').click()   // close sign-in modal dlg
  $('#sign-in').trigger('reset')

  // $('#show-my-recipes-btn').prop('disabled', false)
  // $('#add-recipe-btn').prop('disabled', false)
  $('#change-password-btn').toggle('display')
  $('#sign-out-btn').toggle('display')
  $('#sign-up-btn').toggle('display')
  $('#sign-in-btn').toggle('display')

  // get profile
  profile.index()
}

const signInFailure = () => {
  $('#sign-in-close').click()   // close sign-in modal dlg
  $('#sign-in').trigger('reset')
  $('div#statusBar').text('Sign In failed. Please check that your email and password are correct.')
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const changePasswordSuccess = (data) => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  // $('#notifications').text('Password changed.')
  $('#change-password-close').click()
  $('#change-password').trigger('reset')
}

const changePasswordFailure = (error) => {
  // tell user there is an error
  $('#change-password-close').click()
  $('#change-password').trigger('reset')
  $('div#statusBar').text('Change Password failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
  // $('#notifications').text('Change password failed. Please check that your old and new passwords are correct.')
}

const signOutSuccess = () => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  // $('#notifications').text('You are signed out.')
  $('#sign-out-close').click()
  // $('#start-restart-game').prop('disabled', true)
  // $('#game-statistics').prop('disabled', true)
  $('#sign-up-btn').toggle('display')
  $('#sign-in-btn').toggle('display')
  $('#sign-out-btn').toggle('display')
  $('#change-password-btn').toggle('display')
  $('#show-concerts-btn').hide()
  $('#show-my-concerts-btn').hide()
  $('#filter-concerts-form').hide()
  $('#update-profile-btn').hide()
  $('#create-profile-btn').hide()
  store.myconcerts = null
  store.concerts = null
  store.profile = null
  store.id = null
  store.email = null
  store.token = null

  // $('#show-my-recipes-btn').prop('disabled', true)
  // $('#add-recipe-btn').prop('disabled', true)
  // $('.app-header').text('&lt;h1&gt;Find Me A Concert&lt;/h1&gt;')
  $('.app-header').text('Find Me A Concert')
  $('#concerts-table').hide(500)
  $('#welcome-pg').show(500)
}

const signOutFailure = (error) => {
  // tell user there is an error
  $('#sign-out-close').click()
  $('div#statusBar').text('Sign Out failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutFailure,
  signOutSuccess
}
