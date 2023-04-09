import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(`${url}_page=${page}&_limit=15`)
        .then((response) => {
          const newData = response.data;
          console.log(newData);
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
    }, 0);
  };

  useEffect(() => {
    setData([]);
    setHasMoreItems(true);
    setPage(1);
  }, [url]);

  useEffect(() => {
    if (url.trim() !== "") {
      fetchData();
    }
  }, [url, page]);

  return { data, hasMoreItems, isLoading, fetchData };
};

export default useFetch;
