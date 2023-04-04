import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../components/useFetch";

const AlbumView = () => {
  const { data, isLoading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/albums/1/photos`
  );

  return (
    <>
      <div>AlbumView</div>
      <div>
        <Link to="/">Main</Link>
      </div>
      <div>
        <Link to="/albums/1">Album</Link>
        {/* {data.length} */}
      </div>
      {data &&
        data.map((item) => {
          return (
            <div>
              <div key={item.id}>{item.title}</div>;
              <img src={item.url} alt="" srcset="" />
            </div>
          );
        })}
    </>
  );
};

export default AlbumView;
