import React, {PropTypes as T} from 'react'
import {Link} from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'

import {
  indigo900,
  deepOrange300
} from 'material-ui/styles/colors'

const styles = {
  card: {
    height: '100%'
  },
  avatar: {
    margin: 5
  }
}

class RouteCard extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      editable: false,
      errorText: ''
    }
  }

  handleEdit = () => {
    this.setState({editable: true})
  }

  handleDoneEdit = () => {
    this.setState({editable: false})
  }

  onURLChange (evt, value) {
    this.setState({errorText: !value ? 'This URL is invalid' : ''})
  }

  render () {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleDoneEdit}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleDoneEdit}
      />
    ]

    const {route: {ID, Description, TargetPort, ProxiedURL}} = this.props
    return (
      <Card zDepth={1} style={styles.card}>
        <CardHeader
          title={ID + ':' + TargetPort}
          subtitle={Description || '<no description>'}
          avatar={
            <Avatar
              color={deepOrange300}
              backgroundColor={indigo900}
              size={30}
              style={styles.avatar}>{ID.charAt(0).toUpperCase()}</Avatar>
          }
        />
        <CardTitle title='Proxied URL' subtitle={ProxiedURL || '<none provided>'} />
        <CardText>
          Some other routey stuff.
        </CardText>
        <CardActions>
          <FlatButton label="Edit" onTouchTap={this.handleEdit}/>
          <Dialog
            title={'Edit Route (' + ID + ')'}
            actions={actions}
            modal={false}
            open={this.state.editable}
            onRequestClose={this.handleDoneEdit}
          >
            <TextField
              hintText={ProxiedURL}
              errorText={this.state.errorText}
              onChange={(e, v) => this.onURLChange(e, v)}
              floatingLabelText="The URL to proxy for this service."
            />
          </Dialog>
        </CardActions>
      </Card>
    )
  }
}

RouteCard.displayName = 'RouteCard'

RouteCard.propTypes = {
  route: T.object.isRequired
}

export default RouteCard
