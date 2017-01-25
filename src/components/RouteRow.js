import React, {PropTypes as T} from 'react'
import {Link} from 'react-router'

const RouteRow = ({route: {ID, TargetPort, ProxiedURL}}) => (
  <tr>
    <td className='id'>
      <Link to={`/routes/${encodeURIComponent(ID)}`}>
        {ID}
      </Link>
    </td>
    <td>
      {TargetPort}
    </td>
    <td>
      {ProxiedURL}
    </td>
  </tr>
)

RouteRow.displayName = 'RouteRow'

RouteRow.propTypes = {
  route: T.object.isRequired
}

export default RouteRow
