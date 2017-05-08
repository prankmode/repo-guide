'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getRepos = () => {
  // debug
  console.log('repo:api:getRepos:')

  return $.ajax({
    url: config.apiOrigin + '/repos',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const getOneRepo = () => {
  // debug
  console.log('repo:api:getOneRepo:')

  return $.ajax({
    url: config.apiOrigin + '/repos',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const deleteRepo = (repoid) => {
  // debug
  console.log('repo:api:deleteRepo:')

  return $.ajax({
    url: config.apiOrigin + '/repos/' + repoid,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const updateRepo = () => {
  // debug
  console.log('repo:api:updateRepo:')

  return $.ajax({
    url: config.apiOrigin + '/repos',
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const createRepo = (data) => {
  // debug
  console.log('repo:api:createRepo: data is ', data)

  return $.ajax({
    url: config.apiOrigin + '/repos',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  getRepos,
  getOneRepo,
  deleteRepo,
  updateRepo,
  createRepo
}