import { SimpleGrid, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import DataCard from "./dataCard";
import GameCardSkltn from "./gameCardSkltn";

const MainGrid = () => {
  const { data, error, isLoading } = useData();
  const Skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={4}
      >
        {isLoading &&
          Skeletons.map((skeleton) => <GameCardSkltn key={skeleton} />)}
        {data.map((game) => (
          <DataCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MainGrid;
