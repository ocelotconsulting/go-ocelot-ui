import React, {PropTypes as T} from 'react'
import {connect} from 'react-redux'

export const Root = ({message}) => (
  <h3>{message}</h3>
)

Root.displayName = 'Root'

Root.propTypes = {
  message: T.string.isRequired
}

export const mapStateToProps = ({message}) => ({
  message: message.value
})

export const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
