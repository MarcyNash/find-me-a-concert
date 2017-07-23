'use strict'

// const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onGetConcerts = function (event) {
  event.preventDefault()
  console.log('onGetConcerts')
  api.index()
  .then(ui.onGetConcertsSuccess)
  .catch(ui.onGetConcertsFailure)
}

const onFilterConcerts = function (event) {
  event.preventDefault()
  // const form = $('#filter-concerts-form')
  // const data = form.find('.filterText').text()

  console.log('onFilterConcerts')
  ui.displayMatches('woodstock')
  // api.index()
  // .then(ui.onGetConcertsSuccess)
  // .catch(ui.onGetConcertsFailure)
}

const addHandlers = () => {
  $('#show-concerts-btn').on('click', onGetConcerts)
  $('#filter-concerts-form').on('submit', onFilterConcerts)
}

module.exports = {
  addHandlers,
  onGetConcerts
}
