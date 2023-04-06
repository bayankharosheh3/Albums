import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../components/useFetch";
import InfiniteScroll from "react-infinite-scroller";

const MainView = () => {
  const {
    data: albums,
    hasMoreItems,
    isLoading,
    fetchData,
  } = useFetch("https://jsonplaceholder.typicode.com/albums");

  return (
    <>
      <div>MainView</div>
      <div>
        <Link to="/">Main</Link>
      </div>
      <div>
        <Link to="/albums/1">Album</Link>
      </div>
      <div>
        {/* {data &&
          data.map((item) => {
            const id = item.id;
            return (
              <div key={item.id}>
                <Link to={`/albums/${id}`}>{item.title}</Link>
              </div>
            );
          })} */}
      </div>
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
          {albums.map((album) => {
            const id = album.id;
            return (
              <div key={album.id}>
                <Link to={`/albums/${id}`}>{album.title}</Link>
              </div>
            );
          })}
          {isLoading && <div className="loader">Loading ...</div>}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default MainView;
