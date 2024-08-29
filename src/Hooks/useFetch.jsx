import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { OrdApi } from "../Context/OrdersApi";
function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorDetails, setErrorDetails] = useState(null);
  // const [error, setError] = useState(false);
  const { setFetchedData } = useContext(OrdApi);
  useEffect(() => {
    // Api Setting
    const controller = new AbortController();
    const signal = controller.signal;
    const getOptions = {
      method: "GET",
      signal: signal,
    };

    axios
      .get(url, getOptions)
      .then((response) => {
        if (
          response.request.status != 200 &&
          response.request.readyState != 4
        ) {
          throw new Error("Could Not Fetch Data From Server !");
        }
        return response.data;
      })
      .then((responseData) => {
        setFetchedData(responseData);
        setData(responseData);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name == "AbortError") {
          console.log("Fetch Aborted..!");
          setError(true);
          setErrorDetails("Fetch Aborted..!");
        } else {
          setIsLoading(false);
          setError(true);
          setErrorDetails(err);
        }
      });

    return () => controller.abort();
  }, [url]);

  return { data, isLoading, error, errorDetails };
}

export default useFetch;
