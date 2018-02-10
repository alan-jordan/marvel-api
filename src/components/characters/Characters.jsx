import React from "react";
import { connect } from "react-redux";

import { getCharacter } from "../../actions/characters";
import CharacterSelector from "./CharacterSelector";

const characterIdArray = [1009718, 1009262, 1009664, 1009220];

class Characters extends React.Component {
  componentDidMount() {
    characterIdArray.map(character =>
      this.props.dispatch(getCharacter(character))
    );
  }

  render() {
    return (
      <div>
        <h2>Characters</h2>
        <h3>Pick One</h3>
        {this.props.characters.length > 0 &&
          this.props.characters.map((character, key) => (
            <CharacterSelector
              key={character.key}
              name={character.name}
              description={character.description}
              characterImage={character.characterImage}
            />
          ))}
      </div>
    );
  }
}

const mapStatetoProps = state => {
  console.log(state);
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
