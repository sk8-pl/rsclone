import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoad] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url: any, method = "GET", body = null, headers = {}) => {
      setLoad(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }
        const responce = await fetch(url, { method, body, headers });
        const data = await responce.json();
        if (!responce.ok) {
          throw new Error(data.message || "Unknown error in hook -> request()");
        }

        setLoad(false);
        return data;
      } catch (e: any) {
        setLoad(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = () => setError(null);

  return { loading, request, error, clearError };
};
