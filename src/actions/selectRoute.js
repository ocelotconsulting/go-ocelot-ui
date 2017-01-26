import {SELECT_ROUTE} from './types'

export default (id) =>
  dispatch => {
    dispatch({type: SELECT_ROUTE, id})
  }
