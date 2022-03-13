import React from "react";

const Search = ({ keyPress }) => {
  return (
    <div className="tc ">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        id="search"
        type="search"
        placeholder="Username"
        onKeyPress={keyPress}
      />
    </div>
  );
};

export default Search;
