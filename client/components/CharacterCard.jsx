import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const style = {
  width: '250px'
}

const ChracterCard = () => (
  <MuiThemeProvider>
    <Card style={style}>
      <CardMedia overlay={<CardTitle title="Thor" />}>
      <img src="http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350/standard_fantastic.jpg" alt="Thor" />
      </CardMedia>
      <CardText>
        As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted
        hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and
        compassionate. He's self-assured, and he would never, ever stop fighting for a worthwhile cause.
      </CardText>
    </Card>
  </MuiThemeProvider>
)

export default ChracterCard
