import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataSuccess, resetData } from "../redux/albumsSlice";
import { useDispatch, useSelector } from "react-redux";
const useFetch = (url, debouncedSearchTerm, p) => {
  const [data, setData] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const cachingTime = new Date().getTime();
  const dispatch = useDispatch();

  const reduxData = useSelector((state) => state.albums.data);
  const reduxPage = useSelector((state) => state.albums.lastPageCached);
  const reduxUrl = useSelector((state) => state.albums.url);
  const reduxTime = useSelector((state) => state.albums.cachingTime);

  console.log(reduxPage, page);


  const fetchData = () => {
    console.log("entered");

    if (url == reduxUrl && page <= reduxPage - 1) {
      setPage(page + 1);
      return;
    }

    var data2;
    var page2 = page + 1;
    console.log("enteredok", url);

    // if( page <= reduxPage - 1){
    //   return;
    // }

    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(`${url}_page=${page}&_limit=20`)
        .then((response) => {
          const newData = response.data;
          if (newData.length === 0) {
            if (page === 1 && p === "a") {
              navigate("/not-found");
            } else {
              setHasMoreItems(false);
            }
          } else {
            setData([...data, ...newData]);
            setPage(page + 1);
            data2 = [...reduxData, ...newData];
            page2 = page + 1;
            console.log(url);
            dispatch(fetchDataSuccess({ data2, cachingTime, page2, url }));
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            // navigate("/not-found");
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
    setData([]);
    setHasMoreItems(true);
    setPage(1);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, hasMoreItems, isLoading, fetchData };
};
export default useFetch;
