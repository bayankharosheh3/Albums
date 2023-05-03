import React from "react";
import './styles.css';
import { Link } from "react-router-dom";
import SearchBar from "../../SearchBar";

const Navbar = ({albumId}) => {
  return (
    <div className="nav">
      <div className="albumTitle">Album #{albumId} Photos</div>
      <SearchBar/>
      <Link to="/" className="mainLink">
        -- Back to Main Page
      </Link>
    </div>
  );
};

export default Navbar;
