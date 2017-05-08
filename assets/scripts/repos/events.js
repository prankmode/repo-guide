
const repoApi = require('./api.js')
const authApi = require('../auth/api.js')
const ui = require('./ui.js')
const guideUi = require('../guide/ui.js')
const getFormFields = require(`../../../lib/get-form-fields`)

const onDeleteRepo = function (event) {
  event.preventDefault()
  console.log('repos:events:onDeleteRepos')
  const repoid = $(this).attr('repoid')

  repoApi.deleteRepo(repoid)
    .then(ui.deleteReposSuccess)
    .catch(ui.deleteReposFailure)
}

const onShowRepos = function (event) {
  if (!authApi.isAnyoneLoggedIn(0)) {
    guideUi.showAlert('You must be signed in')
    return
  }
  event.preventDefault()
  console.log('repos:events:onShowRepos')

  repoApi.getRepos()
    .then(ui.getReposSuccess)
    .then(() => {
      $('#delete-repo').on('click', onDeleteRepo)
    })
    .catch(ui.getReposFailure)
}

const onCreateRepo = function (event) {
  if (!authApi.isAnyoneLoggedIn(0)) {
    guideUi.showAlert('You must be logged in')
    return
  }
  event.preventDefault()
  console.log('repos:events:onCreateRepos')
  const data = getFormFields(this)
  console.log('repos:event:onCreateRepos, data is ', data)

  repoApi.createRepo(data)
    .then(ui.createReposSuccess)
    .catch(ui.createReposFailure)
}

const addHandlers = () => {
  $('#all-repos').on('click', onShowRepos)
  $('#create-repo').on('submit', onCreateRepo)
  $('.repo-list').on('click', 'button', onDeleteRepo)
}

module.exports = {
  addHandlers,
  onShowRepos,
  onCreateRepo
}
