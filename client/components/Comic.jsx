import React from 'react'
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Comic extends React.Component {

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <MuiThemeProvider>

      </MuiThemeProvider>
    )
  }
}

function mapStateToProps (state) {
  return {
    comic: state.comic
  }
}

export default connect(mapStateToProps)(Comic)
