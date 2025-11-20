import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useData";
import PlatFormIcon from "./platFormIcon";
import CriticScore from "./criticScore";
interface Props {
  game: Game;
}
const dataCard = ({ game }: Props) => {
  return (
    <Card>
      {" "}
      <Image src={game.background_image} />{" "}
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatFormIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default dataCard;
