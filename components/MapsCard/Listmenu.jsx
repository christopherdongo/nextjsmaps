
import {
  Flex,
  InputGroup,
  InputRightElement,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text
} from "@chakra-ui/react";
import { BiChevronDown, BiHotel, BiMap, BiMapAlt, BiRestaurant, BiSearch, BiStar } from "react-icons/bi";
export const Listitem = () => {
  return (
    <Menu>
    <BiStar fontSize={25} />
    <MenuButton mx={2} transition="all 0.2s" borderRadius={"md"}>
      Choose ratings
    </MenuButton>
    <MenuList>
      <MenuItem
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        onClick={() => setRatings((old) => " ")}
      >
        <Text fontSize={20} fontWeight={500} color={"gray.700"}>
          All Ratings
        </Text>
      </MenuItem>

      <MenuItem
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        onClick={() => setRatings((old) => 2)}
      >
        <Text fontSize={20} fontWeight={500} color={"orange.500"}>
          2.0
        </Text>
        <Rating size="small" value={2} readOnly />
      </MenuItem>

      <MenuItem
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        onClick={() => setRatings((old) => 3)}
      >
        <Text fontSize={20} fontWeight={500} color={"orange.500"}>
          3.0
        </Text>
        <Rating size="small" value={3} readOnly />
      </MenuItem>
      <MenuItem
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        onClick={() => setRatings((old) => 4)}
      >
        <Text fontSize={20} fontWeight={500} color={"orange.500"}>
          4.0
        </Text>
        <Rating size="small" value={4} readOnly />
      </MenuItem>
      <MenuItem
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        onClick={() => setRatings((old) => 5)}
      >
        <Text fontSize={20} fontWeight={500} color={"orange.500"}>
          5.0
        </Text>
        <Rating size="small" value={5} readOnly />
      </MenuItem>
    </MenuList>
    <BiChevronDown fontSize={25} />
  </Menu>
  )
}
