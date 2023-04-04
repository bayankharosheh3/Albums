import { useEffect, useState } from "react";
import axios from 'axios';


const useFetch = (url) => {
  console.log(url);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  // console.log(data);
  return { data, isLoading, error };
};

export default useFetch;
