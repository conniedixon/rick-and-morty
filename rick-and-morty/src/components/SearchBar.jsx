import React from "react";

const SearchBar = props => {
  return (
    <>
      <form>
        <label></label>
        <input
          type="text"
          placeholder="Search characters..."
          onInput={props.handleInput}
        ></input>
        <button onSubmit={props.handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default SearchBar;
