import { Text } from "@chakra-ui/react";
import useData from "../hooks/useData";

const GameGrid = () => {
  const { data, error } = useData();

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

export default GameGrid;
