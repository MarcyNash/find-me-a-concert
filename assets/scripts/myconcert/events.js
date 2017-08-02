'use strict'

// const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onSaveConcert = function (event) {
  event.preventDefault()
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
  .then(ui.onCreateMyConcertSuccess)
  .catch(ui.onCreateMyConcertFailure)
}

const onGetMyConcerts = function (event) {
  event.preventDefault()
  api.index()
  .then(ui.onGetMyConcertsSuccess)
  .catch(ui.onGetMyConcertsFailure)
}

const onDeleteMyConcert = function (event) {
  event.preventDefault()
  const concertID = event.currentTarget.parentNode.getAttribute('data-id')
  api.destroy(concertID)
  .then(ui.onDestroyMyConcertSuccess)
  .catch(ui.onDestroyMyConcertFailure)
}

const addHandlers = () => {
  $('#show-my-concerts-btn').on('click', onGetMyConcerts)
  $('body').on('click', '.saveConcert', onSaveConcert)
  $('body').on('click', '.deleteConcert', onDeleteMyConcert)
}

module.exports = {
  addHandlers,
  onGetMyConcerts,
  onSaveConcert
}
