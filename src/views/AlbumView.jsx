import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";
import useFetch from "../components/useFetch";

const AlbumView = () => {
  const { id } = useParams();
  const {
    data: photos,
    hasMoreItems,
    isLoading,
    fetchData,
  } = useFetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);

  return (
    <>
      <div>AlbumView</div>
      <div>
        <Link to="/">Main</Link>
      </div>
      <div>
        <Link to="/albums/1">Album</Link>
      </div>
      <div>item:{id}</div>
      <div>
        <InfiniteScroll
          pageStart={0}
          loadMore={fetchData}
          hasMore={hasMoreItems}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {photos.map((photo) => (
            <div key={photo.id}>
              <h2>{photo.title}</h2>
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </div>
          ))}
          {isLoading && <div className="loader">Loading ...</div>}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default AlbumView;
