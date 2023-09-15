import { useEffect, useState } from 'react';

const Fetch = (page = '', method = 'GET', body) => {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRes = async () => {
      try {
        console.log(body);
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}${page}`, {
          method: method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        setRes(await res.json());
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getRes();
  }, [body, method, page]);

  return { res, error, isLoading };
};

export default Fetch;
