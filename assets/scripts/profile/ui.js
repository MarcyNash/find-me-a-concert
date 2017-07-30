'use strict'

// const showProfilesTemplate = require('../templates/profile-listing.handlebars')

const profileEngine = require('../store')

const onGetProfileSuccess = (response) => {
}

const onGetProfileFailure = (error) => {
  $('div#statusBar').text('Get profile failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const onUpdateProfileSuccess = (response) => {
  // $('#show-my-profiles-btn').click()
  $('#update-profile-close').click()
  // $('#show-my-profiles-btn').click()
}

const onUpdateProfileFailure = (error) => {
  $('div#statusBar').text('Edit profile failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const onCreateProfileSuccess = () => {
  $('#create-profile-close').click()
  $('#create-profile-form').trigger('reset')
  $('#update-profile-btn').show()
  $('#create-profile-btn').hide()
  $('#show-concerts-btn').prop('disabled', false)
  $('#show-my-concerts-btn').prop('disabled', false)
  $('.app-header').text('Welcome to Find Me A Concert!')
}

const onCreateProfileFailure = (error) => {
  $('#create-profile-close').click()
  $('div#statusBar').text('Add profile failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const onDestroyProfileSuccess = () => {
  // $('#show-my-profiles-btn').click()
}

const onDestroyProfileFailure = (error) => {
  $('div#statusBar').text('Delete profile failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

module.exports = {
  onGetProfileSuccess,
  onGetProfileFailure,
  onUpdateProfileSuccess,
  onUpdateProfileFailure,
  onCreateProfileSuccess,
  onCreateProfileFailure,
  onDestroyProfileSuccess,
  onDestroyProfileFailure
}
