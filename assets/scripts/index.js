'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const authEvents = require('./auth/events.js')
const repoEvents = require('./repos/events.js')
const tagEvents = require('./tags/events.js')
const guideEvents = require('./guide/events.js')

// On document ready
$(() => {
  authEvents.addHandlers()
  repoEvents.addHandlers()
  tagEvents.addHandlers()
  // the following makes sure there is no "flash" of unstyled stuff when
  // page is loaded.  see the <hea> of index.html
  $('.no-fouc').removeClass('no-fouc');
})
