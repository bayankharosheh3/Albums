import React from "react";
import { useParams } from "react-router-dom";
import Album from "../components/Album";

const AlbumView = () => {
  const { id } = useParams();
  return <Album id={id} />;
};

export default AlbumView;
