import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const platFormSelecter = () => {
  const { dataa, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Paltforms
      </MenuButton>
      <MenuList>
        {dataa.map((platForm) => (
          <MenuItem key={platForm.id}>{platForm.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default platFormSelecter;
