import axios from "axios";
import { useEffect, useState } from "react";

// useFetch hook using axios
export function useFetch<T>(
  url: string,
  http = axios
): { data: T | null; loading: boolean; error: any } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    (() => {
      setLoading(true);
      setError(null);
      http
        .get(url)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    })();
  }, []);
  return { data, loading, error };
}
