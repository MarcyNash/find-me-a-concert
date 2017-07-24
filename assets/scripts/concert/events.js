'use strict'

// const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onGetConcerts = function (event) {
  event.preventDefault()
  api.index()
  .then(ui.onGetConcertsSuccess)
  .catch(ui.onGetConcertsFailure)
}

const onFilterConcerts = function (event) {
  event.preventDefault()
  const data = $('#filter-concerts-form').find('.filterText').val()
  ui.displayMatches(data)

  $('.app-header').text('All Concerts - filtered by - ' + data)

  $('#filter-concerts-form').trigger('reset')
}

const addHandlers = () => {
  $('#show-concerts-btn').on('click', onGetConcerts)
  $('#filter-concerts-form').on('submit', onFilterConcerts)
}

module.exports = {
  addHandlers,
  onGetConcerts
}
