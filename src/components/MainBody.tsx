import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}
interface fetchData {
  count: number;
  results: Game[];
}

const MainBody = () => {
  const [data, setData] = useState<Game[]>([]); // store data here
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<fetchData>("/games")
      .then((res) => setData(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {data.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </>
  );
};

export default MainBody;
