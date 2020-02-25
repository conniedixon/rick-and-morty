//get props from characters
getCharacterProps = array => {
  array.forEach(character => {
    return {
      name: character.name,
      species: character.species,
      origin: character.origin.name,
      image: character.image,
      episodes: character.episode
    };
  });
};

module.exports = getCharacterProps;
