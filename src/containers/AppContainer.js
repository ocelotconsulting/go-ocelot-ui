import React, {PropTypes as T} from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {connect} from 'react-redux'
import RootContainer from './RootContainer'
import RoutesContainer from './RoutesContainer'
import getRoutes from '../actions/getRoutes'

export const App = ({onEnter, onLoadRoutes}) => (
  <Router history={browserHistory}>
    <Route path='/' component={RootContainer} onEnter={onEnter}>
      <Route path='/routes' component={RoutesContainer} onEnter={onLoadRoutes}/>
    </Route>
  </Router>
)

App.displayName = 'App'

App.propTypes = {
  onEnter: T.func.isRequired,
  onLoadRoutes: T.func.isRequired
}

export const mapStateToProps = () => ({})

export const mapDispatchToProps = dispatch => ({
  onEnter: () => console.log('enter'),
  onLoadRoutes: () => dispatch(getRoutes())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
