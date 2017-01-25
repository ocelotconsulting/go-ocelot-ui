import {GET_ROUTES} from './types'
import http from './http'

export default () =>
  dispatch =>
    http.get(dispatch, GET_ROUTES, 'routes')
