import React from "react";

const CharacterCard = ({ characters }) => {
  return (
    <>
      {characters.map(character => {
        return (
          <section key={character.id}>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name}></img>
            <p>Species: {character.species}</p>
            <p>Origin: {character.origin.name}</p>
          </section>
        );
      })}
    </>
  );
};

export default CharacterCard;
