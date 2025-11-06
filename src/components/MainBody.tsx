import { SimpleGrid, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import DataCard from "./dataCard";

const MainGrid = () => {
  const { data, error } = useData();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={4}
      >
        {data.map((game) => (
          <DataCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MainGrid;
