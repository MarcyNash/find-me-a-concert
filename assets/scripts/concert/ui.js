'use strict'
const concertEngine = require('../store')

const showConcertsTemplate =
require('../templates/concert-list.handlebars')

const onGetConcertsSuccess = () => {
  const savedConcerts = setSavedConcerts(concertEngine.concerts)

  $('.concert-rows').empty()

  const showConcertsHtml = showConcertsTemplate({ concerts: savedConcerts })
  $('.concert-rows').append(showConcertsHtml)
  $('#welcome-pg').hide(500)
  $('#concerts-table').show(500)
  $('.app-header').text('All Concerts')
  $('#filter-concerts-form').show()
}

const onGetConcertsFailure = (error) => {
  $('div#statusBar').text('Get concerts failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

const onFilterConcertsFailure = (error) => {
  $('div#statusBar').text('Filter all concerts failed. Status = ' + error.status + ' ' + error.statusText)
  $('div#statusBar').show(3000)
  $('div#statusBar').hide(5000)
}

// function setSavedConcertBtns (handlebarsHTML) {
//   if (concertEngine.myconcerts && concertEngine.myconcerts.length > 0) {
//     // const testidfromobj = concertEngine.myconcerts[0].concert.id
//     // const test = $('.concert-rows').find(`[data-id="79"]`)
//     // const test = $('.concert-rows').find(`[data-id="79"]`)
//     for (let i = 0; i < concertEngine.myconcerts.length; i++) {
//       const concertId = concertEngine.myconcerts[i].concert.id
//       $('.concert-rows').find(`[data-id="[${concertId}"]`).children().find('button#saveConcert').textContent('Saved')
//       // $('.concert-rows').find(`[data-id="[${concertId}"]`).children().find('button#saveConcert')('option', 'Saved')
//       // $('.concert-rows').find(`[data-id="[${concertId}"]`).children().find('button#saveConcert').('option', 'label','Saved')
//
//       $('.concert-rows').find(`[data-id="${concertId}"]`).children().find('button#saveConcert').prop('disabled', true)
//     }
//   }
// }

function setSavedConcerts (concertArray) {
  const saveConcertsArray = concertArray
  for (let c = 0; c < saveConcertsArray.length; c++) {
    if (concertEngine.myconcerts && concertEngine.myconcerts.length > 0) {
      for (let m = 0; m < concertEngine.myconcerts.length; m++) {
        if (saveConcertsArray[c].id === concertEngine.myconcerts[m].concert.id) {
          saveConcertsArray[c].saved = true
          break
        } else {
          saveConcertsArray[c].saved = false
        }
      }
    }
  }
  return saveConcertsArray
}

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
  const savedMatchArray = setSavedConcerts(matchArray)
  $('.concert-rows').empty()
  const showConcertsHtml = showConcertsTemplate({concerts: savedMatchArray})
  $('.concert-rows').append(showConcertsHtml)
}

module.exports = {
  onGetConcertsSuccess,
  onGetConcertsFailure,
  displayMatches,
  onFilterConcertsFailure
}
