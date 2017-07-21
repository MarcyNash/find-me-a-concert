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

const addHandlers = () => {
  $('#show-concerts-btn').on('click', onGetConcerts)
}

module.exports = {
  addHandlers,
  onGetConcerts
}
