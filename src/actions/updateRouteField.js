import {UPDATE_ROUTE} from './types'

export default (prop, value) =>
  dispatch => dispatch({type: UPDATE_ROUTE, prop, value})
