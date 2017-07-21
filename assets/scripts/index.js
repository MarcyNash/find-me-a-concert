'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const profileEvents = require('./profile/events.js')
const concertEvents = require('./concert/events.js')
const myConcertEvents = require('./myconcert/events.js')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  profileEvents.addHandlers()
  concertEvents.addHandlers()
  myConcertEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
