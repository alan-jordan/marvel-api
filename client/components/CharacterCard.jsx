import React from 'react'
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const style = {
  width: '100vw',
  margin: '0 auto'
}

class ChracterCard extends React.Component {

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
        <MuiThemeProvider>
          <Card style={style}>
            <CardMedia overlay={<CardTitle title={this.props.character.name} />}>
            <img src={this.props.character.characterImage} alt={this.props.character.name} />
          </CardMedia>
          <CardText>
            {this.props.character.description}
          </CardText>
        </Card>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps (state) {
  return {
    character: state.characters
  }
}

export default connect(mapStateToProps)(ChracterCard)
