'use strict'

// const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onSaveConcert = function (event) {
  event.preventDefault()
  console.log('onSaveConcert')
  const concertID = event.currentTarget.parentNode.getAttribute('data-id')
  event.currentTarget.disabled = true
  event.currentTarget.textContent = 'Saved'
  const profileID = store.profile.id
  const data = {
    'myconcert': {
      'profile_id': profileID,
      'concert_id': concertID
    }
  }
  // const data = getFormFields(event.target)
  api.create(data)
  .then(ui.onSaveConcertSuccess)
  .catch(ui.onSaveConcertFailure)
}

const onGetMyConcerts = function (event) {
  event.preventDefault()
  console.log('onGetMyConcerts')
  api.index()
  .then(ui.onGetMyConcertsSuccess)
  .catch(ui.onGetMyConcertsFailure)
}

// const onGetMyConcert = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.show(data)
//   .then(ui.onGetMyConcertSuccess)
//   .catch(ui.onGetConcertFailure)
// }
//
// const onAddMyConcert = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.create(data)
//   .then(ui.onCreateMyConcertSuccess)
//   .catch(ui.onCreateMyConcertFailure)
// }
//
const onDeleteMyConcert = function (event) {
  console.log('onDeleteMyConcert')
  event.preventDefault()
  const concertID = event.currentTarget.parentNode.getAttribute('data-id')
  api.destroy(concertID)
  .then(ui.onDestroyMyConcertSuccess)
  .catch(ui.onDestroyMyConcertFailure)
}

const addHandlers = () => {
  // $('#add-recipe').on('submit', onCreateConcert)
  // $('#update-recipe').on('show.bs.modal', onShowUpdateForm)
  $('#show-my-concerts-btn').on('click', onGetMyConcerts)
  $('body').on('click', '.saveConcert', onSaveConcert)
  $('body').on('click', '.deleteConcert', onDeleteMyConcert)
  // $('#show-concerts-btn').on('click', onGetConcerts)
}

module.exports = {
  addHandlers,
  onGetMyConcerts,
  // onGetConcert,
  onSaveConcert
  // onGetMyConcert,
  // onDeleteMyConcert
}
