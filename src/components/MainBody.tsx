import { SimpleGrid, Text } from "@chakra-ui/react";
import useData, { Game, Platform } from "../hooks/useData";
import DataCard from "./dataCard";
import GameCardSkltn from "./gameCardSkltn";
import GameCardCont from "./gameCardCont";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}

const MainGrid = ({ gameQuery }: Props) => {
  const { dataa, error, isLoading } = useData(gameQuery);
  const Skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          Skeletons.map((skeleton) => (
            <GameCardCont key={skeleton}>
              {" "}
              <GameCardSkltn />
            </GameCardCont>
          ))}
        {dataa.map((game) => (
          <GameCardCont key={game.id}>
            <DataCard game={game} />
          </GameCardCont>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MainGrid;
