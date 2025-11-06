import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
export interface Game {
  id: number;
  name: string;
  background_image: string;
}
interface fetchData {
  count: number;
  results: Game[];
}
const useData = () => {
  const [data, setData] = useState<Game[]>([]); // store data here
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<fetchData>("/games", { signal: controller.signal })
      .then((res) => setData(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { data, error };
};
export default useData;
