import React, {PropTypes as T} from 'react'
import Spinner from '../components/Spinner'
import RouteTable from '../components/RouteTable'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper'

const style = {
  margin: 50,
  textAlign: 'center',
  display: 'inline-block'
}

export const Routes = ({routes}) => routes ? (
  <Paper style={style} zDepth={1} >
    <h3>
      {'Routes '}
      <small>Services available for routing...</small>
    </h3>
    <RouteTable routes={routes}/>
  </Paper>
) : (
  <Spinner/>
)

Routes.displayName = 'Routes'

Routes.propTypes = {
  routes: T.arrayOf(T.object)
}

export const mapStateToProps = ({routes: {all}}) => ({routes: all})

export default connect(mapStateToProps, () => ({}))(Routes)
