import React, {PropTypes as T} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import saveRoute from '../actions/saveRoute'
import updateRouteField from '../actions/updateRouteField'

class RouteDialogContainer extends React.Component {

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
    const {route, open, close, onSave, onChange} = this.props
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
        onTouchTap={onSave(route)}
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
        <div>
            <TextField
              errorText={this.state.errorText}
              onChange={onChange}
              floatingLabelText="The name of the service."
            />
        </div>
        <div>
            <TextField
              errorText={this.state.errorText}
              onChange={onChange}
              floatingLabelText="The port for the service."
            />
        </div>
        <div>
            <TextField
              errorText={this.state.errorText}
              onChange={onChange}
              floatingLabelText="The URL to proxy for this service."
            />
        </div>
        <div>
            <TextField
              errorText={this.state.errorText}
              onChange={onChange}
              floatingLabelText="A description for this service."
            />
        </div>
      </Dialog>
    )
  }
}

RouteDialogContainer.displayName = 'RouteDialogContainer'

RouteDialogContainer.propTypes = {
  route: T.object,
  onSave: T.func.isRequired,
  onChange: T.func.isRequired
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => {
  const onChange = (prop, targetProperty = 'value') =>
    ({target}) =>
      dispatch(updateRouteField(prop, target[targetProperty]))
  return {
    onSave: (route) => () => dispatch(saveRoute(route)),
    onChange: (prop) => onChange(prop)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteDialogContainer)
