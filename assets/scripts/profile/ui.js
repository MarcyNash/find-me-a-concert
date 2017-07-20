'use strict'

// const showProfilesTemplate = require('../templates/profile-listing.handlebars')

const profileEngine = require('../store')

// const onGetProfileSuccess = () => {
//   $('.profile-rows').empty()
//
//   const showProfileHtml = showProfilesTemplate({ profiles: profileEngine.profiles })
//   $('.profile-rows').append(showProfilesHtml)
//   $('#welcome-pg').hide(500)
//   $('#concerts-table').show(500)
// }

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
  // const profileToArray = []
  // profileToArray.push(profileEngine.profile)
  // const showProfilesHtml = showProfilesTemplate({ profiles: profileToArray })
  // $('.profile-rows').append(showProfilesHtml)
  // $('#show-my-profiles-btn').click()
}

const onCreateProfileFailure = (error) => {
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
