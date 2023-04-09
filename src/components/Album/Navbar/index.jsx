import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

const Navbar = ({id}) => {
  return (
    <div className="nav">
      <div className="albumTitle">Album #{id} Photos</div>
      <Link to="/" className="mainLink">
        -- Back to Main Page
      </Link>
    </div>
  );
};

export default Navbar;
