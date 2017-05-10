
const tagApi = require('./api.js')
const authApi = require('../auth/api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const guideUi = require('../guide/ui.js')

const onDeleteTag = function (event) {
  event.preventDefault()
  const tagid = $(this).attr('tagid')

  tagApi.deleteTag(tagid)
    .then(ui.deleteTagSuccess)
    .then(() => {
      tagApi.getTags()
        .then(ui.getTagsSuccess)
        .catch(ui.getTagsFailure)
      })
    .catch(ui.deleteTagFailure)
}

const onShowTags = function (event) {
  if (!authApi.isAnyoneLoggedIn(0)) {
    guideUi.showAlert('You must be logged in')
    return
  }
  event.preventDefault()

  tagApi.getTags()
    .then(ui.getTagsSuccess)
    .catch(ui.getTagsFailure)
}

const onCreateTag = function (event) {
  if (!authApi.isAnyoneLoggedIn(0)) {
    guideUi.showAlert('You must be logged in')
    return
  }
  event.preventDefault()
  const data = getFormFields(this)

  tagApi.createTag(data)
    .then(ui.createTagSuccess)
    .then(() => {
      tagApi.getTags()
        .then(ui.getTagsSuccess)
        .catch(ui.getTagsFailure)
    })
    .catch(ui.createTagFailure)
  $('#create-tag-modal').modal('toggle')
}

const addHandlers = () => {
  $('#create-tag').on('submit', onCreateTag)
  $('#all-tags').on('click', onShowTags)
  $('.repo-or-tag-list').on('click', '#delete-tag', onDeleteTag)
}

module.exports = {
  addHandlers,
  onShowTags
}
