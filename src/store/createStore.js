import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import routes from './routes'

const logger = createLogger()

export default () =>
  createStore(combineReducers({routes}), applyMiddleware(thunk, logger))
