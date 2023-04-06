import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);

    setTimeout(() => {
      axios
        .get(`${url}?_page=${page}&_limit=10`)
        .then((response) => {
          const newData = response.data;
          if (newData.length === 0) {
            setHasMoreItems(false);
          } else {
            setData([...data, ...newData]);
            setPage(page + 1);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, hasMoreItems, isLoading, fetchData };
};

export default useFetch;
