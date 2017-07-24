'use strict'
const concertEngine = require('../store')

const showConcertsTemplate =
require('../templates/concert-list.handlebars')

const onGetConcertsSuccess = () => {
  $('.concert-rows').empty()

  const showConcertsHtml = showConcertsTemplate({ concerts: concertEngine.concerts })
  $('.concert-rows').append(showConcertsHtml)
  $('#welcome-pg').hide(500)
  $('#concerts-table').show(500)
  $('.app-header').text('All Concerts')
  $('#filter-concerts-form').show()
  // $('#filterText').hide()
  // $('#filter-btn').hide()
  // const rowCount = $('.concert-rows').children().length
  // for (let iRow = 0; iRow < rowCount; iRow++) {
  //   const dataID = $('.concert-rows').children()[iRow].children[0].prop('data-id')
  //   for (let i = 0; i < concertEngine.myConcerts.length; i++) {
  //     if (dataID === concertEngine.myConcerts.concerts.id) {
  //       $('.concert-rows').children()[iRow].children[0].disabled = true          // $('.concert-rows').children()[iRow].children()[0].disabled = true
  //       $('.concert-rows').children()[iRow].children[0].textContent = 'Saved'
  //     }
  //   }
  // }
    // $('.concert-rows').children()[iRow].children[0].disabled = true
    // $('.concert-rows').children()[iRow].children()[0].disabled = true
    // $('.concert-rows').children()[iRow].children[0].textContent = 'Saved'
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
const onFilterConcertsFailure = (error) => {
  $('div#statusBar').text('Filter all concerts failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

// function setSavedConcertBtns (handlebarsHTML) {
//
// }

const findMatches = function (wordToMatch) {
  const filteredConcerts = concertEngine.concerts.filter(concert => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi')
    const name = concert.concert_name ? concert.concert_name : ''
    const addr = concert.venue_address ? concert.venue_address : ''
    return (name.match(regex) ||
    concert.concert_date.match(regex) ||
    concert.artist.match(regex) ||
    concert.venue.match(regex) ||
    addr.match(regex) ||
    concert.cost.match(regex))
  })
  return filteredConcerts
}

function displayMatches (filterText) {
  const matchArray = findMatches(filterText)
  $('.concert-rows').empty()
  const showConcertsHtml = showConcertsTemplate({concerts: matchArray})
  $('.concert-rows').append(showConcertsHtml)
  // $('#welcome-pg').hide(500)
  // $('#concerts-table').show(500)
}

module.exports = {
  onGetConcertsSuccess,
  onGetConcertsFailure,
  onGetMyConcertSuccess,
  onGetMyConcertFailure,
  displayMatches,
  onFilterConcertsFailure
}
