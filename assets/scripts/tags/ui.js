const showTagsTemplate = require('../templates/tag-list.handlebars')

const getTagsSuccess = (data) => {
  if (data.tags.length > 0) {
    const showTagsHtml = showTagsTemplate({ tags: data.tags })
    $('#repo-or-tag-list').html(showTagsHtml)
  }
}

const getTagsFailure = (response) => {
}

const updateTagSuccess = (response) => {
}

const updateTagFailure = (response) => {
}

const deleteTagSuccess = (response) => {
}

const deleteTagFailure = (response) => {
}

const createTagSuccess = (response) => {
}

const createTagFailure = (response) => {
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
