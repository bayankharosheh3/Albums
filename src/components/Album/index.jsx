import React from "react";
import "./styles.css";
import Photos from "./Photos";
import Navbar from "./Navbar";

const Album = ({ albumId }) => {
  return (
    <div className="overlay">
      <div className="albumContainer">
        <Navbar albumId={albumId} />
        <Photos albumId={albumId} />
      </div>
    </div>
  );
};

export default Album;
