import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className="pa2">
      <input onChange={searchChange} className="pa3 ba b--green bg-lightes-blue" type="search" placeholder="Search for a robofriend" />
    </div>
  );
};

export default SearchBox;
