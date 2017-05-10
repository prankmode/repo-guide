const showTagsTemplate = require('../templates/tag-list.handlebars')
const guideUi = require('../guide/ui.js')

const getTagsSuccess = (data) => {
  if (data.tags.length > 0) {
    const showTagsHtml = showTagsTemplate({ tags: data.tags })
    $('#repo-or-tag-list').html(showTagsHtml)
  } else {
    $('#repo-or-tag-list').html('')
  }
}

const getTagsFailure = (response) => {
  guideUi.showAlert("Couldn't get the tags - whaaaat.")
}

const deleteTagSuccess = (response) => {
}

const deleteTagFailure = (response) => {
  guideUi.showAlert("Couldn't delete tag.")
}

const createTagSuccess = (response) => {
}

const createTagFailure = (response) => {
  guideUi.showAlert("Couldn't create tag.")
}

module.exports = {
  getTagsSuccess,
  getTagsFailure,
  deleteTagSuccess,
  deleteTagFailure,
  createTagSuccess,
  createTagFailure
}
