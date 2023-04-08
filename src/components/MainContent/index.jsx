import React from "react";
import "./styles.css";
import AlbumsList from "../AlbumsList";
import Header from "../Header";

const MainContent = () => {
  return (
    <div className="overlay">
      <Header />
      <AlbumsList />
    </div>
  );
};

export default MainContent;
