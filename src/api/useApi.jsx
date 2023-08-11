import { useState } from "react";
import axios from "axios";

const useApi = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const makeRequest = async (method, url, data = null) => {
    setLoading(true);

    try {
      const config = {
        method: method,
        url: url,
        data: data,
      };

      const result = await axios(config);
      setResponse(result.data);
      setError(null);
    } catch (error) {
      setError(error.response.data);
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  const get = (url) => makeRequest("GET", url);
  const post = (url, data) => makeRequest("POST", url, data);
  const put = (url, data) => makeRequest("PUT", url, data);
  const del = (url) => makeRequest("DELETE", url);

  return { response, error, loading, get, post, put, del };
};

export default useApi;
