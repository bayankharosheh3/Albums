import React from "react";
import { useSelector } from "react-redux";
import SearchHistory from "./SearchHistory";
import "./styles.css";


const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const searchHistory = useSelector((state) => state.searchHistory);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <>
      <div className="listTitle">
        <p className="text">/ albums search</p>
        <input
          type="text"
          name=""
          id=""
          value={searchTerm}
          className="input"
          onChange={handleSearchTermChange}
        />
        <SearchHistory searchHistory={searchHistory} />
      </div>
    </>
  );
};

export default SearchBar;
