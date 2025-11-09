import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useData";
import PlatFormIcon from "./platFormIcon";
interface Props {
  game: Game;
}
const dataCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      {" "}
      <Image src={game.background_image} />{" "}
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatFormIcon
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default dataCard;
