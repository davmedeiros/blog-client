import { useEffect, useState } from 'react';

const Fetch = (page = '') => {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRes = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}${page}`);
        setRes(await res.json());
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getRes();
  }, [page]);

  return { res, error, isLoading };
};

export default Fetch;
