import React from "react";
import useFetch from "../../useFetch";
import InfiniteScroll from "react-infinite-scroller";
import Card from "./Card";
import "./styles.css";

const Photos = ({ albumId,debouncedSearchTerm }) => {
  const {
    data: photos,
    hasMoreItems,
    isLoading,
    fetchData,
  } = useFetch(`  https://jsonplaceholder.typicode.com/albums/${albumId}/photos?q=${debouncedSearchTerm}&`,'a');

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
          <Card id={photo.id} url={photo.thumbnailUrl} title={photo.title} key={photo.id}/>
        ))}
      </div>
    </InfiniteScroll>
  );
};
export default Photos;