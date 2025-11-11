// this one to publish the data
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


interface fetchResponse<T> {
    count: number;
    results: T[];

}
const useingData = <T>(endpoint:string , deps? :any[] ,requestConfig?:AxiosRequestConfig ) => {
  const [dataa, setingData] = useState<T[]>([]); // store data here
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<fetchResponse<T>>(endpoint, { signal: controller.signal , ...requestConfig})
      .then((res) => {
        setingData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, deps ? [...deps]: []);
  return { dataa, error, isLoading };};

export default useingData;