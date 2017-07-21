'use strict'

const showConcertsTemplate = require('../templates/concert-list.handlebars')

const concertEngine = require('../store')

const onGetConcertsSuccess = () => {
  $('.concert-rows').empty()

  const showConcertsHtml = showConcertsTemplate({ concerts: concertEngine.concerts })
  $('.concert-rows').append(showConcertsHtml)
  $('#welcome-pg').hide(500)
  $('#concerts-table').show(500)
}

const onGetConcertsFailure = (error) => {
  $('div#statusBar').text('Get concerts failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const onGetMyConcertSuccess = (response) => {

}

const onGetMyConcertFailure = (error) => {
  $('div#statusBar').text('Get concert failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

// const onUpdateConcertSuccess = (response) => {
//   // $('#show-my-concerts-btn').click()
//   $('#update-concert-close').click()
//   $('#show-my-concerts-btn').click()
// }
//
// const onUpdateConcertFailure = (error) => {
//   $('div#statusBar').text('Edit concert failed. Status = ' + error.status + ' ' + error.statusText)
//   $('div#statusBar').show(3000)
//   $('div#statusBar').hide(5000)
// }
//
// const onCreateConcertSuccess = () => {
//   $('#add-concert-close').click()
//   const concertToArray = []
//   concertToArray.push(concertEngine.concert)
//   const showConcertsHtml = showConcertsTemplate({ concerts: concertToArray })
//   $('.concert-rows').append(showConcertsHtml)
//   $('#show-my-concerts-btn').click()
// }
//
// const onCreateConcertFailure = (error) => {
//   $('div#statusBar').text('Add concert failed. Status = ' + error.status + ' ' + error.statusText)
//   $('div#statusBar').show(3000)
//   $('div#statusBar').hide(5000)
// }
//
// const onDestroyConcertSuccess = () => {
//   $('#show-my-concerts-btn').click()
// }
//
// const onDestroyConcertFailure = (error) => {
//   $('div#statusBar').text('Delete concert failed. Status = ' + error.status + ' ' + error.statusText)
//   $('div#statusBar').show(3000)
//   $('div#statusBar').hide(5000)
// }

module.exports = {
  onGetConcertsSuccess,
  onGetConcertsFailure,
  onGetMyConcertSuccess,
  onGetMyConcertFailure
//   onUpdateConcertSuccess,
//   onUpdateConcertFailure,
//   onCreateConcertSuccess,
//   onCreateConcertFailure,
//   onDestroyConcertSuccess,
//   onDestroyConcertFailure
}
