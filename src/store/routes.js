import {GET_ROUTES, EDIT_ROUTE, UPDATE_ROUTE, DELETE_ROUTE} from '../actions/types'

const initialState = {
  all: undefined,
  editing: undefined
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
    case EDIT_ROUTE:
      return {
        ...state,
        editing: action.route
      }
    case UPDATE_ROUTE: {
      return {
        ...state,
        editing: {...state.editing,
          [action.prop]: action.value
        }
      }
    }
    case DELETE_ROUTE: {
      switch (action.status) {
        case 'error':
          return {...state, error: action.error}
        case 'done':
          console.log(`Trying to delete ${action.id}`)
          let {all: {[`${action.id}`]: omit, ...all}} = state
          return {
            ...state,
            all
          }
        default:
          return state
      }
    }
    default:
      return state
  }
}
