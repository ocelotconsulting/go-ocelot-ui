import {EDIT_ROUTE} from './types'

export default (route) =>
  dispatch => {
    dispatch({type: EDIT_ROUTE, route})
  }
