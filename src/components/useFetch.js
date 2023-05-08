import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useInfiniteQuery } from "react-query";

const useFetch = (url, p) => {
  const navigate = useNavigate();

  const fetchPosts = async ({ pageParam = 1 }) => {
    const response = await axios.get(`${url}_page=${pageParam}&_limit=20`);

    if (response.data.length === 0) {
      if (pageParam === 1 && p === "a") {
        throw new Error("No posts found");
      } else {
        return {
          data: [],
          nextPage: null,
        };
      }
    }

    return {
      data: response.data,
      nextPage: pageParam + 1,
    };
  };

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(["posts", url], fetchPosts, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const allPosts = data ? data.pages.flatMap((page) => page) : [];

  useEffect(() => {
    if (isError) {
      navigate("/not-found");
    }
  }, [isError, navigate]);

  return { data: allPosts, isLoading, hasMoreItems:hasNextPage, fetchData:fetchNextPage, isFetchingNextPage };
};

export default useFetch;
