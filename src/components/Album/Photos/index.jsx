import React from "react";
import useFetch from "../../useFetch";
import InfiniteScroll from "react-infinite-scroller";
import Card from "./Card";
import "./styles.css";

const Photos = ({ id }) => {
  const {
    data: photos,
    hasMoreItems,
    isLoading,
    fetchData,
  } = useFetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos?`);

  return (
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
      <div className="photoContainer">
        {photos.map((photo) => (
          <Card id={photo.id} url={photo.thumbnailUrl} title={photo.title} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Photos;
