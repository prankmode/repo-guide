const showReposTemplate = require('../templates/repo-list.handlebars')
const guideUi = require('../guide/ui.js')

const getReposSuccess = (data) => {
  if (data.repos.length > 0) {
    const showReposHtml = showReposTemplate({ repos: data.repos })
    $('#repo-or-tag-list').html(showReposHtml)
  }
  // $('#create-repo').on('submit', repoEvents.onCreateRepo)
  // $('#delete-repo').on('click', repoEvents.onDeleteRepo)
}

const getReposFailure = (response) => {
}

const updateRepoSuccess = (response) => {
}

const updateRepoFailure = (response) => {
  guideUi.showAlert('Could not update repo')

}

const deleteRepoSuccess = (response) => {
}

const deleteRepoFailure = (response) => {
  guideUi.showAlert('Could not delete repo')
}

const createRepoSuccess = (response) => {
}

const createRepoFailure = (response) => {
  guideUi.showAlert('Could not create repo')
}

const populateReposSuccess = (response) => {

}
const populateReposFailure = (response) => {
  guideUi.showAlert('Unable to access that Github account')
}
const addTagToRepoSuccess = (response) => {
}
const addTagToRepoFailure = (response) => {
  guideUi.showAlert('Could not add tag to this repo')
}


module.exports = {
  getReposSuccess,
  getReposFailure,
  updateRepoSuccess,
  updateRepoFailure,
  deleteRepoSuccess,
  deleteRepoFailure,
  createRepoSuccess,
  createRepoFailure,
  populateReposSuccess,
  populateReposFailure,
  addTagToRepoSuccess,
  addTagToRepoFailure
}
