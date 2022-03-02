
import {
    Flex,
    Text
  } from "@chakra-ui/react";
  import { BiChevronDown, BiHotel, BiMap, BiMapAlt, BiRestaurant, BiSearch, BiStar } from "react-icons/bi";


export const Card = ({name, icons}) => {
  return (
    <Flex
    alignItems={"center"}
    justifyContent={"center"}
    px={4}
    py={2}
    bg={"white"}
    rounded={"full"}
    ml={4}
    shadow="lg"
    cursor={"pointer"}
    _hover={{ bg: "gray.100" }}
    transition={"ease-in-out"}
    transitionDuration={"0.3s"}
    onClick={() => setType((old) => "attraction")}
  >
    {icons}
    <Text ml={3} fontSize={16} fontWeight={500}>
      {name}
    </Text>
    {/*Hotels*/}
  </Flex>
  )
}
