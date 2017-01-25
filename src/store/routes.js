import {GET_ROUTES, SELECT_ROUTE} from '../actions/types'

const initialState = {
  selected: {
    repository: {}
  }
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ROUTES:
      switch (action.status) {
        case 'start':
          return {...state, all: undefined, error: undefined}
        case 'error':
          return {...state, error: action.error}
        case 'done':
          return {...state, all: action.result}
        default:
          return state
      }
    case SELECT_ROUTE:
      return {
        ...state,
        selected: {
          id: action.routeId
        }
      }
    default:
      return state
  }
}
