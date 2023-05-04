import React, { useState } from "react";
import "./styles.css";
import Photos from "./Photos";
import Navbar from "./Navbar";
import useSearch from "../useSearch";

const Album = ({ albumId }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useSearch(searchTerm, 500);

  return (
    <div className="overlay">
      <div className="albumContainer">
        <Navbar albumId={albumId} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <Photos albumId={albumId} debouncedSearchTerm={debouncedSearchTerm}/>
      </div>
    </div>
  );
};

export default Album;
