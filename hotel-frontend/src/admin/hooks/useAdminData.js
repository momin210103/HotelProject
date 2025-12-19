import { useState, useEffect, useCallback } from 'react';

/**
 * Generic admin data fetching hook
 * @param {Function} fetchFn - Async function to fetch data
 * @param {Array} dependencies - Dependencies array for refetch (optional)
 * @returns {Object} { data, loading, error, refetch }
 */
export function useAdminData(fetchFn, dependencies = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchFn();
        if (!cancelled) {
          setData(result);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Failed to fetch data');
          setData(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true; // Cleanup to prevent state updates on unmounted component
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies); // Use only the dependencies array, NOT fetchFn

  const refetch = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchFn()
      .then((result) => setData(result))
      .catch((err) => setError(err.message || 'Failed to fetch data'))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { data, loading, error, refetch };
}