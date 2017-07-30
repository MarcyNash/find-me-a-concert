'use strict'

const config = require('../config')
const store = require('../store')
const myconcerts = require('./../myconcert/api')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/profiles',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
.then((response) => {
  if (!response) {
    store.profile = null
    // $('#update-profile-btn').hide()
    $('#create-profile-btn').show()
    $('#show-concerts-btn').show()
    $('#show-my-concerts-btn').show()
    $('#show-concerts-btn').prop('disabled', true)
    $('#show-my-concerts-btn').prop('disabled', true)
    $('.app-header').text('Welcome to Find Me A Concert. Please create a profile to view and save concerts.')
  } else {
    store.profile = response.profile
    $('#update-profile-btn').show()
    $('#create-profile-btn').hide()
    $('#show-concerts-btn').show()
    $('#show-my-concerts-btn').show()
    $('#show-concerts-btn').prop('disabled', false)
    $('#show-my-concerts-btn').prop('disabled', false)
    $('.app-header').text('Welcome back to Find Me A Concert!')
    // const form = $('#update-profile-form')
    $('.uuser-name').val(store.profile.user_name)
    // $('.uabout-me').text('')
    $('.uabout-me').val(store.profile.about_me)

    // Get user's list of my concerts. The user's saved concerts
    // are needed to disallow saving already saved concerts.
    myconcerts.index()
  }
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
    $('.uuser-name').val(store.profile.user_name)
    // $('.uabout-me').text('')
    $('.uabout-me').val(store.profile.about_me)
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
    $('.uuser-name').val(store.profile.user_name)
    // problem with about_me having old text in update
    // $('.uabout-me').text('')
    $('.uabout-me').val(store.profile.about_me)
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
    })
}

module.exports = {
  index,
  show,
  update,
  create,
  destroy
}
