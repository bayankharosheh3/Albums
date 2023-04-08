import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Photos from "./Photos";

const Album = ({ id }) => {
  return (
    <div className="overlay">
      <div className="albumContainer">
        <div className="nav">
          <div className="albumTitle">Album #{id} Photos</div>
          <Link to="/" className="mainLink">
            -- Back to Main Page
          </Link>
        </div>
        <Photos id={id}/>
      </div>
    </div>
  );
};

export default Album;
