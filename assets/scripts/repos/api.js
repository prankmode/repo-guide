'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getRepos = () => {
  return $.ajax({
    url: config.apiOrigin + '/repos',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const getOneRepo = () => {
  return $.ajax({
    url: config.apiOrigin + '/repos',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const deleteRepo = (repoid) => {
  return $.ajax({
    url: config.apiOrigin + '/repos/' + repoid,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const createRepo = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/repos',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

const populateRepos = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/repos/populate',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateRepo = (repoid, data) => {
  return $.ajax({
    url: config.apiOrigin + '/repos/' + repoid,
    method: 'PATCH',
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
  createRepo,
  populateRepos
}
