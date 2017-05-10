const showReposTemplate = require('../templates/repo-list.handlebars');
const repoEvents = require ('./events.js')

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

}

const deleteRepoSuccess = (response) => {
}

const deleteRepoFailure = (response) => {
}

const createRepoSuccess = (response) => {
}

const createRepoFailure = (response) => {
}

const populateReposSuccess = (response) => {
}
const populateReposFailure = (response) => {
}
const addTagToRepoSuccess = (response) => {
}
const addTagToRepoFailure = (response) => {
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
