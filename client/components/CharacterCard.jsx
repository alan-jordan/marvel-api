import React from 'react'
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const style = {
  width: '90vw',
  margin: '0 auto'
}

class ChracterCard extends React.Component {

  componentWillReceiveProps(nextProps) {
  }

  renderComics() {
    return this.props.character.comics.map((comic) => {
      // return (<img src={`${comic.images[0].path}/detail.${comic.images[0].extension}`}/>)
      return(<img src={`${comic.images[0].path}/portrait_fantastic.jpg`}/>)
    })
  }

  render() {
    return (
      <div>
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
      {this.props.character.comics.length > 0 ? <h1>{this.renderComics()}</h1> : <h1>No comics</h1>}
    </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    character: state.characters
  }
}

export default connect(mapStateToProps)(ChracterCard)
