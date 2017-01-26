import {GET_ROUTE} from './types'
import http from './http'

export default (routeId) =>
  dispatch => {
    dispatch({type: GET_ROUTE, routeId})
    return http.get(
      dispatch,
      GET_ROUTE,
      `routes/${encodeURIComponent(routeId)}`
    )
  }
