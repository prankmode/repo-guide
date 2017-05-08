
const tagApi = require('./api.js')
const authApi = require('../auth/api.js')
const ui = require('./ui.js')
const getFormFields = require(`../../../lib/get-form-fields`)

const onDeleteTag = function (event) {
  event.preventDefault()
  console.log('tags:events:onDeleteTags')
  const tagid = $(this).attr('tagid')

  tagApi.deleteTag(tagid)
    .then(ui.deleteTagsSuccess)
    .catch(ui.deleteTagsFailure)
}

const onShowTags = function (event) {
  if (!authApi.isAnyoneLoggedIn(0)) {
    ui.showtagsFailure()
    return
  }
  event.preventDefault()
  console.log('tags:events:onShowTags')

  tagApi.getTags()
    .then(ui.getTagsSuccess)
    .then(() => {
      $('#delete-tag').on('click', onDeleteTag)
    })
    .catch(ui.getTagsFailure)
}

const onCreateTag = function (event) {
  // if (!authApi.isAnyoneLoggedIn(0)) {
  //   ui.showTagsFailure()
  //   return
  // }
  event.preventDefault()
  console.log('tags:events:onCreateTags')
  const data = getFormFields(this)

  tagApi.createTag(data)
    .then(ui.createTagsSuccess)
    .catch(ui.createTagsFailure)
}

const addHandlers = () => {
  $('#create-tag').on('submit', onCreateTag)
}

module.exports = {
  addHandlers,
  onShowTags
}
