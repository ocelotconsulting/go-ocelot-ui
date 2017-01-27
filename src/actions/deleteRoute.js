import {DELETE_ROUTE} from './types'
import http from './http'

export default (id) =>
  dispatch => {
    return http.del(
      dispatch,
      DELETE_ROUTE,
      `routes/${encodeURIComponent(id)}`,
      id
    )
  }
