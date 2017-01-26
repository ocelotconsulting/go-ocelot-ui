import React, {PropTypes as T} from 'react'
import RouteTable from '../components/RouteTable'
import {connect} from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import AddIcon from 'material-ui/svg-icons/content/add'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import RouteDialogContainer from './RouteDialogContainer'

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
}
class RoutesContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      new: false
    }
  }

  handleNew = () => {
    this.setState({new: true})
  }

  handleDoneEdit = () => {
    this.setState({new: false})
  }

  render() {
    const {routes} = this.props
    return routes ? (
      <div>
        <h3>
          &nbsp;
        </h3>
        <RouteTable routes={routes}/>
        <FloatingActionButton
          style={style}
          onTouchTap={this.handleNew}>
          <AddIcon />
        </FloatingActionButton>
        <RouteDialogContainer open={this.state.new} close={this.handleDoneEdit} />
      </div>
    ) : (
      <RefreshIndicator
        size={40}
        left={10}
        top={0}
        status="loading"
        style={style.refresh}
      />)
  }
}
RoutesContainer.displayName = 'RoutesContainer'

RoutesContainer.propTypes = {
  routes: T.object
}

export const mapStateToProps = ({routes: {all}}) => ({routes: all})

export default connect(mapStateToProps, () => ({}))(RoutesContainer)
