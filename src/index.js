import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const store = createStore()

render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('main')
)
