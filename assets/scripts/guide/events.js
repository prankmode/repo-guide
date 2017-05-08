const repo = require('../repos/events.js')
const tag = require('../tags/events.js')

const addHandlers = () => {
  $('#all-repos').on('click', repo.onShowRepos)
  $('#all-tags').on('click', tag.onShowTags)
}

module.exports = {
  addHandlers
}