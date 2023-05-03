import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const useFetch = (url, p) => {
  const [data, setData] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(`${url}_page=${page}&_limit=20`)
        .then((response) => {
          const newData = response.data;
          console.log(newData);
          if (newData.length === 0) {
            if (page === 1 && p === "a") {
              navigate("/not-found");
            } else {
              setHasMoreItems(false);
            }
          } else {
            setData([...data, ...newData]);
            setPage(page + 1);
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            navigate("/not-found");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  };

  const infiniteScroll = () => {
    if (
      scrollRef.current &&
      scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
        scrollRef.current.scrollHeight
    ) {
      setPage(page + 1);
      fetchData();
    }
  };

  useEffect(() => {
    setData([...[]]);
    setHasMoreItems(true);
    setPage(1);
  }, [url]);

  useEffect(() => {
    setData([]);
    setHasMoreItems(true);
    setPage(1);
    fetchData();
    scrollRef.current = window;
    window.addEventListener('scroll', infiniteScroll);
  }, []);

  return { data, hasMoreItems, isLoading, fetchData };
};

export default useFetch;
