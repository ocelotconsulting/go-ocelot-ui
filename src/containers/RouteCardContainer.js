import React, {PropTypes as T} from 'react'
import {connect} from 'react-redux'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import EditIcon from 'material-ui/svg-icons/image/edit'
import RouteDialogContainer from '../containers/RouteDialogContainer'
import editRoute from '../actions/editRoute'
import deleteRoute from '../actions/deleteRoute'

import {
  cyan500
} from 'material-ui/styles/colors'

const styles = {
  smallerIcon: {
    width: 40,
    height: 40
  }
}

class RouteCardContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      editable: false,
      errorText: ''
    }
  }

  render () {
    const {route, onRouteEdit, onRouteDelete} = this.props
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
                      anchorOrigin={{horizontal: 'left', vertical: 'center'}}
                      targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                    >
                      <MenuItem primaryText="Edit" leftIcon={<EditIcon />} onTouchTap={() => onRouteEdit(route)}/>
                      <Divider />
                      <MenuItem primaryText="Delete" leftIcon={<DeleteIcon />} onTouchTap={() => onRouteDelete(route.id)}/>
                    </IconMenu>}
        />
        <CardTitle title='Proxied URL' subtitle={route.proxiedURL || '<none provided>'} />
        <CardText>
          Some other routey stuff.
        </CardText>
      </Card>
    )
  }
}

RouteCardContainer.displayName = 'RouteCardContainer'

RouteCardContainer.propTypes = {
  route: T.object.isRequired,
  onRouteEdit: T.func.isRequired,
  onRouteDelete: T.func.isRequired
}

export const mapDispatchToProps = dispatch => ({
  onRouteEdit: (route) => dispatch(editRoute(route)),
  onRouteDelete: (routeId) => dispatch(deleteRoute(routeId))
})

export default connect(() => ({}), mapDispatchToProps)(RouteCardContainer)
