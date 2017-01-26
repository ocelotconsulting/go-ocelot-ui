import React, {PropTypes as T} from 'react'
import {Link} from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import Dialog from 'material-ui/Dialog'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import EditIcon from 'material-ui/svg-icons/image/edit'
import EditRouteDialog from './EditRouteDialog'

import {
  cyan500
} from 'material-ui/styles/colors'

const styles = {
  smallerIcon: {
    width: 40,
    height: 40
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

    const {route} = this.props
    return (
      <Card zDepth={1}>
        <CardHeader
          title={route.id + ':' + route.targetPort}
          subtitle={route.description || '<no description>'}
          avatar={
            <Avatar
              size={40}
              backgroundColor={cyan500}>{route.id.charAt(0).toUpperCase()}</Avatar>
          }
          children={<IconMenu style={styles.smallerIcon}
                      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                      targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    >
                      <MenuItem primaryText="Edit" leftIcon={<EditIcon />} onTouchTap={this.handleEdit}/>
                      <Divider />
                      <MenuItem primaryText="Delete" leftIcon={<DeleteIcon />}/>
                    </IconMenu>}
        />
        <CardTitle title='Proxied URL' subtitle={route.proxiedURL || '<none provided>'} />
        <CardText>
          Some other routey stuff.
        </CardText>
        <CardActions>
          <EditRouteDialog route={route} open={this.state.editable} close={this.handleDoneEdit} />
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
