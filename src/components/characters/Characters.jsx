import React from "react";
import { connect } from "react-redux";

class Characters extends React.Component {
  render() {
    return <p>Characters</p>;
  }
}

const mapStatetoProps = state => {
  return {
    characters: state.characters
  };
};

export default connect(mapStatetoProps)(Characters);
