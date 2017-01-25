import React, {PropTypes as T} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {deepOrange500} from 'material-ui/styles/colors'
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
})

class Root extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open})
  handleClose = () => this.setState({open: false})

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title='Ocelot'
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          {this.props.children}
          <Drawer
            docked={false}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}>
            <MenuItem
              onTouchTap={this.handleClose}
              containerElement={<Link to="/routes" />}>Routes</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }
}

Root.displayName = 'Root'

Root.propTypes = {
}

export const mapStateToProps = () => ({})

export const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
