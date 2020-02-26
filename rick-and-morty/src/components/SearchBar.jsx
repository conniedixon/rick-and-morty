import React from "react";

const SearchBar = props => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <label></label>
        <input
          type="text"
          placeholder="Search characters..."
          onInput={props.handleInput}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SearchBar;
