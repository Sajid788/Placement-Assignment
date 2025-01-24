import { useState, useEffect } from 'react';

// Custom hook: useFetch
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 3;
    const cacheKey = `cache-${url}`;
    
    const fetchData = async () => {
      if (localStorage.getItem(cacheKey)) {
        setData(JSON.parse(localStorage.getItem(cacheKey)));
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        localStorage.setItem(cacheKey, JSON.stringify(result));
        setData(result);
        setLoading(false);
      } catch (error) {
        if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(fetchData, 1000 * retryCount);
        } else {
          setError(error.message || 'Something went wrong');
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [url]);

  return [data, loading, error];
};

// Component: FetchApi
function FetchApi() {
  const [data, loading, error] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
}

export default FetchApi;
