'use strict'

const store = require('../store')
const profile = require('./../profile/api')
// const profileUI = require('./../profile/ui')

const signUpSuccess = (data) => {
  // please do not leave this in your production application
  // instead, you probably want to manipulate the DOM,
  // for example, put up default view
  $('#sign-up-close').click()
  $('#sign-up-modal').trigger('reset')
  // $('#sign-up-btn').prop('disabled', true)
  // $('#notifications').text('Sign Up succeeded. Please log in to play Tic-Tac-Toe.')
}

const signUpFailure = (error) => {
  $('#sign-up-close').click()
  $('#sign-up-modal').trigger('reset')
  $('#sign-up-btn').prop('disabled', false)  // ??? this button automatically disabled after failure
  $('div#statusBar').text('Sign Up failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const signInSuccess = (data) => {
  $('#sign-in-close').click()   // close sign-in modal dlg
  $('#sign-in-modal').trigger('reset')

  // $('#show-my-recipes-btn').prop('disabled', false)
  // $('#add-recipe-btn').prop('disabled', false)
  $('#change-password-btn').prop('disabled', false)
  $('#sign-out-btn').prop('disabled', false)
  $('#sign-up-btn').prop('disabled', true)
  $('#sign-in-btn').prop('disabled', true)

  // for now
  $('#welcome-pg').hide(500)
  $('#concerts-table').show(500)
  // get profile
  profile.index()
  .catch((error) => {
    $('div#statusBar').text('Could not get your profile -  ' + error.statusText)
    $('div#statusBar').show(3000)
    $('div#statusBar').hide(5000)
  })
}

const signInFailure = () => {
  $('#sign-in-close').click()   // close sign-in modal dlg
  $('#sign-in-modal').trigger('reset')
  $('#sign-up-btn').prop('disabled', false)
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
  $('#change-password-modal').trigger('reset')
}

const changePasswordFailure = (error) => {
  // tell user there is an error
  $('#change-password-close').click()
  $('#change-password-modal').trigger('reset')
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
  $('#change-password-btn').prop('disabled', true)
  $('#sign-out-btn').prop('disabled', true)
  $('#sign-up-btn').prop('disabled', false)
  $('#sign-in-btn').prop('disabled', false)

  // $('#show-my-recipes-btn').prop('disabled', true)
  // $('#add-recipe-btn').prop('disabled', true)

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
