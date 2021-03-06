'use strict'

const showConcertsTemplate = require('../templates/myconcert-list.handlebars')

const concertEngine = require('../store')

const onGetMyConcertsSuccess = () => {
  $('#filter-concerts-form').hide()
  $('.concert-rows').empty()

  const showConcertsHtml = showConcertsTemplate({ myconcerts: concertEngine.myconcerts })
  $('.concert-rows').append(showConcertsHtml)

  $('#welcome-pg').hide(500)
  $('#concerts-table').show(500)
  $('.app-header').text('My Concerts')
}

const onGetMyConcertsFailure = (error) => {
  $('div#statusBar').text('Get concerts failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const onCreateMyConcertSuccess = () => {
  // $('#add-concert-close').click()
  // const concertToArray = []
  // concertToArray.push(concertEngine.concert)
  // const showConcertsHtml = showConcertsTemplate({ concerts: concertToArray })
  // $('.concert-rows').append(showConcertsHtml)
  // $('#show-my-concerts-btn').click()
}

const onCreateMyConcertFailure = (error) => {
  $('div#statusBar').text('Add concert failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const onDestroyMyConcertSuccess = () => {
  $('#show-my-concerts-btn').click()
}

const onDestroyMyConcertFailure = (error) => {
  $('div#statusBar').text('Delete concert failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

module.exports = {
  onGetMyConcertsSuccess,
  onGetMyConcertsFailure,
  onCreateMyConcertSuccess,
  onCreateMyConcertFailure,
  onDestroyMyConcertSuccess,
  onDestroyMyConcertFailure
}
