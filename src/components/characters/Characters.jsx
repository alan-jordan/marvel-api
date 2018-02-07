import React from "react";
import { connect } from "react-redux";

class Characters extends React.Component {
  render() {
    return (
      <div>
        <h2>Characters</h2>
        <h3>Pick One</h3>
        <p>Wolverine</p>
        <p>Daredevil</p>
        <p>Thor</p>
        <p>Cap</p>
        <p>Groot</p>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    characters: state.characters
  };
};

export default connect(mapStatetoProps)(Characters);

//1009718 - wolverine
//1009262 - daredevil
//1009664 - thor
//1009220 - Cap
//1010743 - Groot
