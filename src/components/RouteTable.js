import React, {PropTypes as T} from 'react'
import RouteCardContainer from '../containers/RouteCardContainer'
import {GridList} from 'material-ui/GridList'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap'
  }
}

const RouteTable = ({routes}) => (
  <div style={styles.root}>
    <GridList key="grid"
      cols={3}
      cellHeight="auto"
      padding={20}
      style={styles.gridList}
    >
      {Object.keys(routes).map(routeKey => (
        <RouteCardContainer key={routes[routeKey].id} route={routes[routeKey]}/>
      ))}
    </GridList>
  </div>
)

RouteTable.displayName = 'RouteTable'

RouteTable.propTypes = {
  routes: T.object.isRequired
}

export default RouteTable
