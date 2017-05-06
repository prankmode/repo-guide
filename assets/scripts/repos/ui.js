const showReposTemplate = require('../templates/repo-list.handlebars');


const getReposSuccess = (data) => {
  console.log('repos:ui:getReposSuccess')
  let showReposHtml = showReposTemplate({ repos: data.repos });
  $('#repo-list').replaceWith(showReposHtml);
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



module.exports = {
  getReposSuccess,
  getReposFailure,
  updateRepoSuccess,
  updateRepoFailure,
  deleteRepoSuccess,
  deleteRepoFailure,
  createRepoSuccess,
  createRepoFailure
}
