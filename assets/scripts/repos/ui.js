const showReposTemplate = require('../templates/repo-list.handlebars');
const repoEvents = require ('./events.js')

const getReposSuccess = (data) => {
  console.log('repos:ui:getReposSuccess')
  if (data.repos.length > 0) {
    const showReposHtml = showReposTemplate({ repos: data.repos })
    $('#repo-or-tag-list').html(showReposHtml)
  }
  // $('#create-repo').on('submit', repoEvents.onCreateRepo)
  // $('#delete-repo').on('click', repoEvents.onDeleteRepo)
}

const getReposFailure = (response) => {
  console.log('repos:ui:getReposFailure')
}

const updateRepoSuccess = (response) => {
  console.log('repos:ui:updateRepoSuccess')
}

const updateRepoFailure = (response) => {
  console.log('repos:ui:updateRepoFailure')

}

const deleteRepoSuccess = (response) => {
  console.log('repos:ui:deleteRepoSuccess')
}

const deleteRepoFailure = (response) => {
  console.log('repos:ui:deleteRepoFailure')
}

const createRepoSuccess = (response) => {
  console.log('repos:ui:createRepoSuccess')
}

const createRepoFailure = (response) => {
  console.log('repos:ui:createRepo')
}

const populateReposSuccess = (response) => {
  console.log('repos:ui:populateReposSuccess')
}
const populateReposFailure = (response) => {
  console.log('repos:ui:populateReposFailure')
}
const addTagToRepoSuccess = (response) => {
  console.log('repos:ui:addTagToRepoSuccess')
}
const addTagToRepoFailure = (response) => {
  console.log('repos:ui:addTagToRepoFailure')
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
