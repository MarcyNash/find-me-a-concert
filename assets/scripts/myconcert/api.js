'use strict'

const config = require('../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/myconcerts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
  .then((response) => {
    store.myconcerts = response.myconcerts
  })
}

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/myconcerts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.token
    },
    data
  })
  .then((response) => {
    store.myconcerts.push(response.myconcert)
  })
}

const destroy = function (myConcertID) {
  return $.ajax({
    url: config.apiOrigin + '/myconcerts/' + myConcertID,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
    .then((response) => {
    })
}

module.exports = {
  index,
  create,
  destroy
}
