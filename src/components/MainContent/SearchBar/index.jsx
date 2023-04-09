import React, { useState } from "react";
import useFetch from "../../useFetch";

export default function AlbumSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: albums,
    hasMoreItems,
    isLoading,
    fetchData,
  } = useFetch(`https://jsonplaceholder.typicode.com/albums?q=${searchTerm}&`, {
    data: [],
  });

  function handleSearch() {
    if (searchTerm.trim() !== "") {
      fetchData(`https://jsonplaceholder.typicode.com/albums?q=${searchTerm}&`);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {console.log(albums)}
    </div>
  );
}
