import React from "react";
import { connect } from "react-redux";

import { getCharacter } from "../../actions/character";
import { getCharacterComics } from "../../actions/comics";

class Character extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCharacter(this.props.match.params.id));
    this.props.dispatch(getCharacterComics(this.props.match.params.id));
  }

  render() {
    return (
      <div>
        <h2>CHARACTER</h2>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  console.log(state);
  return {
    character: state.character,
    comics: state.comics
  };
};

export default connect(mapStatetoProps)(Character);
