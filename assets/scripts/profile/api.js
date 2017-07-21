'use strict'

const config = require('../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/profiles',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
  .then((response) => {
    console.log('got profile')
    store.profile = response.profile
    $('#update-profile-btn').show()
    $('#create-profile-btn').hide()
  })
}

const show = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/profiles/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
  .then((response) => {
    store.profile = response.profile
  })
}

const update = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/profiles/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.token
    },
    data
  })
  .then((response) => {
    store.profile = response.profile
  })
}

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/profiles',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.token
    },
    data
  })
  .then((response) => {
    store.profile = response.profile
  })
}

const destroy = function (profileID) {
  return $.ajax({
    url: config.apiOrigin + '/profiles/' + profileID,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
    .then((response) => {
      // console.log(response)
    })
}

module.exports = {
  index,
  show,
  update,
  create,
  destroy
}
