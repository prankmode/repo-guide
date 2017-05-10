const showTagsTemplate = require('../templates/tag-list.handlebars')

const getTagsSuccess = (data) => {
  console.log('tags:ui:getTagsSuccess')
  if (data.tags.length > 0) {
    const showTagsHtml = showTagsTemplate({ tags: data.tags })
    $('#repo-or-tag-list').html(showTagsHtml)
  }
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
