import React, { useState } from "react";
import "./styles.css";
import useFetch from "../../useFetch";
import InfiniteScroll from "react-infinite-scroller";
import { Link } from "react-router-dom";

const AlbumsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: albums,
    hasMoreItems,
    isLoading,
    fetchData,
  } = useFetch(`https://jsonplaceholder.typicode.com/albums?q=${searchTerm}&`);

  return (
    <div>
      <div className="listContainer">
        <div className="listTitle">
          <p className="text">/ albums search</p>
          <input
            type="text"
            name=""
            id=""
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          {console.log(searchTerm)}
        </div>
        <div className="albumsList">
          <div className="listItem">
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
              <div className="gridContainer">
                {albums.map((album) => {
                  const id = album.id;
                  return (
                    <div key={album.id} className="gridItem">
                      <span className="itemNum">{album.id}</span>
                      <Link className="itemLink" to={`/albums/${id}`}>
                        <span className="link">{album.title}</span>
                      </Link>
                    </div>
                  );
                })}
              </div>
              {isLoading && <div className="loader">Loading ...</div>}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumsSection;
