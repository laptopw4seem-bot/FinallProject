import {
  FaWindows,
  FaApple,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useData";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconBase, IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const platFormIcon = ({ platforms }: Props) => {
  const iconmap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    nintendo: SiNintendoswitch,
  };
  return (
    <>
      <HStack marginY={"10px"}>
        {platforms.map((platform) => (
          <Icon as={iconmap[platform.slug]} color={"gray.500"} />
        ))}
      </HStack>
    </>
  );
};

export default platFormIcon;
