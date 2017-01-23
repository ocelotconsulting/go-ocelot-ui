import {
  INCREMENT
} from '../actions/types'

const initialState = {
  x: 42
}


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        x: state.x + 1
      }
    }
    default: return state
  }
}
