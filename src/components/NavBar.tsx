import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/analysis-graph-svgrepo-com (1).webp";
import { ColorMode } from "./ColorMode";
export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorMode />
    </HStack>
  );
};
