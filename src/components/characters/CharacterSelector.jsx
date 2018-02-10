import React from "react";
import { connect } from "react-redux";

const characterIdArray = [1009718, 1009262, 1009664, 1009220];

class CharacterSelector extends React.Component {
  render() {
    return (
      <div className="characterSelector">
        <img className="thumbNail" src={this.props.characterImage} />
        <div class="bottom-left">{this.props.name}</div>
      </div>
    );
  }
}

export default connect()(CharacterSelector);

//1009718 - wolverine
//1009262 - daredevil
//1009664 - thor
//1009220 - Cap
//1010743 - Groot
