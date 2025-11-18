import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/analysis-graph-svgrepo-com (1).webp";
import { ColorMode } from "./ColorMode";
import SerchInput from "./searchInput";
export const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SerchInput />

      <ColorMode />
    </HStack>
  );
};
