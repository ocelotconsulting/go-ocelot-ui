import {SAVE_ROUTE} from './types'
import http from './http'
import getRoute from './getRoute'

export default (route) =>
  (dispatch, getState) => {
    return http.put(dispatch, SAVE_ROUTE, `routes/${encodeURIComponent(route.id)}`, route)
    .then(() => dispatch(getRoute(route.id)))
  }
