import React, {PropTypes as T} from 'react'
import RouteRow from './RouteRow'

const RouteTable = ({routes}) => (
  <table className='table table-striped'>
    <thead>
    <tr>
      <th>Route ID</th>
      <th>Port</th>
      <th>Proxied URL</th>
      <th/>
    </tr>
    </thead>
    <tbody>
    {Object.keys(routes).map(
      routeKey => (
        <RouteRow key={routes[routeKey].id} route={routes[routeKey]}/>
      )
    )}
    </tbody>
  </table>
)

RouteTable.displayName = 'RouteTable'

RouteTable.propTypes = {
  routes: T.object.isRequired
}

export default RouteTable
