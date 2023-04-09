import React from "react";
import { useParams } from "react-router-dom";
import Album from "../components/Album";

const AlbumView = () => {
  const { id } = useParams();
  
  return (
    <div className="container">
      <Album id={id} />
    </div>
  );
};

export default AlbumView;
