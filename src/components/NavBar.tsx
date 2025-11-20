import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/analysis-graph-svgrepo-com (1).webp";
import { ColorMode } from "./ColorMode";
import SerchInput from "./searchInput";
interface Props {
  onSearch: (searchText: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SerchInput onSearch={onSearch} />

      <ColorMode />
    </HStack>
  );
};
