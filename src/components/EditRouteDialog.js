import React, {PropTypes as T} from 'react'
import {Link} from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'

class EditRouteDialog extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      errorText: ''
    }
  }

  onURLChange (evt, value) {
    this.setState({errorText: !value ? 'This URL is invalid' : ''})
  }

  render () {
    const {route, open, close} = this.props
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={close}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={close}
      />
    ]

    return route ? (
      <Dialog
        title={'Edit Route (' + route.id + ')'}
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={close}
      >
        <TextField
          hintText={route.proxiedURL}
          errorText={this.state.errorText}
          onChange={(e, v) => this.onURLChange(e, v)}
          floatingLabelText="The URL to proxy for this service."
        />
      </Dialog>
    ) : (
      <Dialog
        title={'New Route'}
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={close}
      >
        <TextField
          errorText={this.state.errorText}
          onChange={(e, v) => this.onURLChange(e, v)}
          floatingLabelText="The URL to proxy for this service."
        />
      </Dialog>
    )
  }
}

EditRouteDialog.displayName = 'EditRouteDialog'

EditRouteDialog.propTypes = {
  route: T.object
}

export default EditRouteDialog
