import React from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const style = {
  width: '100vw',
  margin: '0 auto'
}

const Header = () => {
  return (
    <MuiThemeProvider>
      <AppBar style ={style} title="Marvel API" />
    </MuiThemeProvider>
  )
}

export default Header
