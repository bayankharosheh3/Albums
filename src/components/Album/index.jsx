import React from "react";
import "./styles.css";
import Photos from "./Photos";
import Navbar from "./Navbar";

const Album = ({ id }) => {
  return (
    <div className="overlay">
      <div className="albumContainer">
        <Navbar id={id} />
        <Photos id={id} />
      </div>
    </div>
  );
};

export default Album;
