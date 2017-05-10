'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getTags = () => {

  return $.ajax({
    url: config.apiOrigin + '/tags',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const getOneTag = () => {

  return $.ajax({
    url: config.apiOrigin + '/tags',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const deleteTag = (tagid) => {

  return $.ajax({
    url: config.apiOrigin + '/tags/' + tagid,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const updateTag = () => {

  return $.ajax({
    url: config.apiOrigin + '/tags',
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const createTag = (data) => {

  return $.ajax({
    url: config.apiOrigin + '/tags',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  getTags,
  getOneTag,
  deleteTag,
  updateTag,
  createTag
}
