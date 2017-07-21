'use strict'

const config = require('../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/concerts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
  .then((response) => {
    store.concerts = response.concerts
  })
}

module.exports = {
  index
}
