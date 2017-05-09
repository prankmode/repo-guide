
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

const onPopulateRepos = function (event) {
  if (!authApi.isAnyoneLoggedIn(0)) {
    guideUi.showAlert('You must be logged in')
    return
  }
  event.preventDefault()
  console.log('repos:events:onPopulateRepos')
  repoApi.populateRepos()
    .then(ui.populateReposSuccess)
    .catch(ui.populateReposFailure)
}

const onUpdateRepo = function (event) {
  if (!authApi.isAnyoneLoggedIn(0)) {
    guideUi.showAlert('You must be logged in')
    return
  }
  event.preventDefault()
  console.log('repos:events:onUpdateRepo')
  const repoid = $(this).attr('repoid')
  const data = getFormFields(this)
  console.log(data)
  repoApi.updateRepo(repoid, data)
    .then(ui.addTagToRepoSuccess)
    .catch(ui.addTagToRepoFailure)
}

const addHandlers = () => {
  $('#all-repos').on('click', onShowRepos)
  $('#create-repo').on('submit', onCreateRepo)
  $('.repo-or-tag-list').on('click', '#delete-repo', onDeleteRepo)
  $('.repo-or-tag-list').on('submit', '#update-repo', onUpdateRepo)
  $('#populate').on('click', onPopulateRepos)
}

module.exports = {
  addHandlers,
  onShowRepos,
  onCreateRepo
}
