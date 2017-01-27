import {SAVE_ROUTE} from './types'
import http from './http'
import {browserHistory} from 'react-router'

export default (route) =>
  (dispatch, getState) => {
    return http.put(dispatch, SAVE_ROUTE, `routes/${encodeURIComponent(route.id)}`, route)
    .then(() => browserHistory.push(`/routes/${encodeURIComponent(route.id)}`))
  }
