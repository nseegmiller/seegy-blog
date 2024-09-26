import React from 'react'
import PropTypes from 'prop-types'
import { ManualPageTemplate } from '../../templates/manual-page'

const ManualPagePreview = ({ entry, widgetFor }) => (
  <ManualPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ManualPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ManualPagePreview
