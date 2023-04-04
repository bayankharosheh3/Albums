import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../components/useFetch";

const MainView = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/albums"
  );

  // console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
        {data &&
          data.map((item) => {
            const id = item.id;
            return (
              <div key={item.id}>
                <Link to={`/albums/${id}`}>{item.title}</Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MainView;
