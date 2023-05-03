import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className="listTitle">
        <p className="text">/ albums search</p>
        <input
          type="text"
          name=""
          id=""
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBar;
