import React from "react";
import { Link } from "react-router-dom";

const MainView = () => {
  return (
    <>
      <div>MainView</div>
      <div>
        <Link to="/">Main</Link>
      </div>
      <div>
        <Link to="/albums/1">Album</Link>
      </div>
    </>
  );
};

export default MainView;
