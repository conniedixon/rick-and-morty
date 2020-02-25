import React from "react";
import "./App.css";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import CharacterCard from "./components/CharacterCard";

class App extends React.Component {
  state = {
    characters: [],
    searchTerm: "",
  };

  componentDidMount(prevProps, prevState) {
    if (this.state !== prevState) {
      fetch("https://rickandmortyapi.com/api/character/?limit=500")
        .then(results => {
          return results.json();
        })
        .then(results => {
          this.setState(currentState => {
            return {
              characters: results.results
            };
          });
        });
    }
  }

  handleSubmit = ({ event }) => {};

  handleInput = event => {
    const value = event.target.value;
    console.log(value);
  };

  render() {
    return (
      <>
        <Title />
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
        />
        <CharacterCard characters={this.state.characters} />
      </>
    );
  }
}

export default App;
