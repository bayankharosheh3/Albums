import React from "react";
import { Link } from "react-router-dom";

const AlbumView = () => {
  return (
    <>
      <div>AlbumView</div>
      <div>
        <Link to="/">Main</Link>
      </div>
      <div>
        <Link to="/albums/1">Album</Link>
      </div>
    </>
  );
};

export default AlbumView;
