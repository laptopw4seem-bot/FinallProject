import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useData";
interface Props {
  onSelectPlatform: (platform: Platform) => void;
  slectedPlatform: Platform | null;
}

const platFormSelecter = ({ onSelectPlatform, slectedPlatform }: Props) => {
  const { dataa, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {slectedPlatform?.name || "Select Platform"}
      </MenuButton>
      <MenuList>
        {dataa.map((platForm) => (
          <MenuItem
            onClick={() => onSelectPlatform(platForm)}
            key={platForm.id}
          >
            {platForm.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default platFormSelecter;
