'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onGetProfile = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.show(data)
  .then(ui.onGetProfileSuccess)
  .catch(ui.onGetProfileFailure)
}

const onCreateProfile = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
  .then(ui.onCreateProfileSuccess)
  .catch(ui.onCreateProfileFailure)
}

const onUpdateProfile = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.update(data, store.profile.id)
  .then(ui.onUpdateProfileSuccess)
  .catch(ui.onUpdateProfileFailure)
}

const onDeleteProfile = function (event) {
  event.preventDefault()
  api.destroy(store.profile.id)
  .then(ui.onDestroyProfileSuccess)
  .catch(ui.onDestroyProfileFailure)
}

const addHandlers = () => {
  $('#create-profile-form').on('submit', onCreateProfile)
  $('#update-profile-form').on('submit', onUpdateProfile)
}

module.exports = {
  addHandlers,
  onGetProfile,
  onCreateProfile,
  onUpdateProfile,
  onDeleteProfile
}
