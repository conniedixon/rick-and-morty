import React from "react";
import "./App.css";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import CharacterCard from "./components/CharacterCard";

class App extends React.Component {
  state = {
    characters: [],
    currentChars: [],
    searchTerm: "",
  };

  // componentDidMount(prevProps, prevState) {
    
  //   if (this.state !== prevState) {
  //     const characterList = []
  //     for (let i = 1; i < 20; i++) { 
  //       fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
  //       .then(results => {
  //         return results.json();
  //       })
  //       .then(({results}) => {
  //         chracterlist.push(results)
  //       }
  //         this.setState(currentState => {
  //           return {
  //             characters: results,
  //             currentChars: results
            
  //           };
  //         });
  //       });
  //     }}
  // }

  componentDidMount(prevProps, prevState) {
    if (this.state !==prevState) {
      for (let i = 0; i < 20; i++) {
        fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
        .then(results => {
          return results.json();
        }).then(results=>{
          this.setState(currentState=>{
            return {
              characters: [...currentState.characters, results.results ].flat()

            }
          })})
    }
  }
}
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state !== prevState) {
  //     fetch("https://rickandmortyapi.com/api/character/")
  //       .then(results => {
  //         return results.json();
  //       })
  //       .then(results => {
  //         this.setState(currentState => {
  //           return {
  //             characters: results.results,
  //             currentChars: results.results
  //           };
  //         });
  //       });
  //   }
  // }

  handleInput = event => {
    const value = event.target.value;
    this.setState(currentState=>{
      return{
        searchTerm:value
      }
    })
  };

handleSubmit = (event) => {
  event.preventDefault()
  this.setState(currentState=>{
    let newChars = []
    currentState.characters.forEach(character=>{
      if (character.name === currentState.searchTerm) {
        newChars.push(character)
      }
    })
    return {
      currentChars:newChars
    }
  }, ()=>{
    
    console.log(this.state.currentChars)
  })
}

  render() {
    return (
      <>
        <Title />
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
        />
        <CharacterCard characters={this.state.currentChars} searchTerm={this.state.searchTerm} />
      </>
    );
  }
}

export default App;
