import React, {PropTypes as T} from 'react'
import Spinner from '../components/Spinner'
import RouteTable from '../components/RouteTable'
import {connect} from 'react-redux'

const style = {
  margin: 50,
  paddingLeft: 10,
  paddingRight: 10
}

export const Routes = ({routes}) => routes ? (
  <div>
    <h3>
      &nbsp;
    </h3>
    <RouteTable routes={routes}/>
  </div>
) : (
  <Spinner/>
)

Routes.displayName = 'Routes'

Routes.propTypes = {
  routes: T.object
}

export const mapStateToProps = ({routes: {all}}) => ({routes: all})

export default connect(mapStateToProps, () => ({}))(Routes)
