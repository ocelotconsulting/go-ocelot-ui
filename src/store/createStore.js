import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import example from './example'
import message from './message'

const logger = createLogger()

export default () =>
  createStore(combineReducers({example, message}), applyMiddleware(thunk, logger))
