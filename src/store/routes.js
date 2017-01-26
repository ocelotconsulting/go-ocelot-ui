import {GET_ROUTES, SELECT_ROUTE, UPDATE_CONFIG} from '../actions/types'

const initialState = {
  selected: {
    id: undefined
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
          id: action.id
        }
      }
    case UPDATE_CONFIG: {
      return {
        ...state,
        editing: {...state.editing,
          [action.prop]: action.value
        }
      }
    }
    default:
      return state
  }
}
