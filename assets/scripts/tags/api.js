'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getTags = () => {
  // debug
  console.log('tag:api:getTags:')

  return $.ajax({
    url: config.apiOrigin + '/tags',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const getOneTag = () => {
  // debug
  console.log('tag:api:getOneTag:')

  return $.ajax({
    url: config.apiOrigin + '/tags',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const deleteTag = (tagid) => {
  // debug
  console.log('tag:api:deleteTag:')

  return $.ajax({
    url: config.apiOrigin + '/tags/' + tagid,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const updateTag = () => {
  // debug
  console.log('tag:api:updateTag:')

  return $.ajax({
    url: config.apiOrigin + '/tags',
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const createTag = (data) => {
  // debug
  console.log('tag:api:createTag: data is ', data)

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
