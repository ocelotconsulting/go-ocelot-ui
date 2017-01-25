import React, {PropTypes as T} from 'react'
import {Link} from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import {
  deepOrange300,
  purple500
} from 'material-ui/styles/colors'

const styles = {
  card: {
    height: '100%'
  },
  avatar: {
    margin: 5
  }
}

const RouteCard = ({route: {ID, TargetPort, ProxiedURL}}) => (
    <Card zDepth={1} style={styles.card}>
      <CardHeader
        title={ID}
        subtitle="Subtitle"
        avatar={
          <Avatar
            color={deepOrange300}
            backgroundColor={purple500}
            size={30}
            style={styles.avatar}>{ID.charAt(0).toUpperCase()}</Avatar>
        }
      />
      <CardTitle title='Proxied URL' subtitle={ProxiedURL || '<none provided>'} />
      <CardText>
        Some other routey stuff.
      </CardText>
      <CardActions>
        <FlatButton label="Edit" />
      </CardActions>
    </Card>
)

RouteCard.displayName = 'RouteCard'

RouteCard.propTypes = {
  route: T.object.isRequired
}

export default RouteCard