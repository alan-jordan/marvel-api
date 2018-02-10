import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CharacterSelector extends React.Component {
  render() {
    return (
      <div className="character">
        <div className="characterSelector">
          <Link to={`character/${this.props.id}`}>
            <img className="thumbNail" src={this.props.characterImage} />
          </Link>
          <div className="bottom-left">{this.props.name}</div>
        </div>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default connect()(CharacterSelector);
