const showTagsTemplate = require('../templates/tag-list.handlebars')

const getTagsSuccess = (data) => {
  console.log('tags:ui:getTagsSuccess')
  let showTagsHtml = showTagsTemplate({ tags: data.tags })
  $('#tag-list').replaceWith(showTagsHtml)
}

const getTagsFailure = (response) => {
  console.log('tags:ui:getTagsFailure')
}

const updateTagSuccess = (response) => {
  console.log('tags:ui:updateTagSuccess')
}

const updateTagFailure = (response) => {
  console.log('tags:ui:updateTagFailure')
}

const deleteTagSuccess = (response) => {
  console.log('tags:ui:deleteTagSuccess')
}

const deleteTagFailure = (response) => {
  console.log('tags:ui:deleteTagFailure')
}

const createTagSuccess = (response) => {
  console.log('tags:ui:createTagSuccess')
}

const createTagFailure = (response) => {
  console.log('tags:ui:createTagFailure')
}

module.exports = {
  getTagsSuccess,
  getTagsFailure,
  updateTagSuccess,
  updateTagFailure,
  deleteTagSuccess,
  deleteTagFailure,
  createTagSuccess,
  createTagFailure
}
