import React,{useState} from "react";
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
import { Autocomplete } from '@react-google-maps/api';
import { BiChevronDown, BiHotel, BiMapAlt, BiRestaurant, BiSearch, BiStar } from "react-icons/bi";
import { Rating } from "@material-ui/lab";


export const Header = ({ type, setType, ratings,addrating, setRatings, setCoordinates }) => {

  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad=(autoC)=>setAutocomplete(autoC);

  const onPlaceChanged = ()=>{
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng =  autocomplete.getPlace().geometry.location.lng();
    setCoordinates( old => {
      return {lat, lng}
    })
  }

  return (
    <Flex
      position={"absolute"}
      width={"full"}
      px={4}
      py={2}
      zIndex={101}
      top={0}
      left={0}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Flex>
        <Autocomplete 
        onLoad={onLoad}
        onPlaceChanged={onPlaceChanged}
        >
        <InputGroup width={"35vw"} shadow="lg">
          <InputRightElement
            pointerEvents={"none"}
            // eslint-disable-next-line react/no-children-prop
            children={<BiSearch color="gray" fontSize={20} />}
          />
          <Input
            type={"text"}
            placeholder="Search Google Map..."
            variant={"filled"}
            fontSize={18}
            bg={"white"}
            color={"gray.700"}
            _hover={{ bg: "whiteAlpha.800" }}
            _focus={{ bg: "whiteAlpha.800" }}
            _placeholder={{ color: "gray.700" }}
          />
        </InputGroup>
        </Autocomplete>

        <Flex alignItems={"center"} justifyContent={"center"}>
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
          >
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
                  onClick={() => setRatings((old) => '')}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    all Ratings
                  </Text>
                  <Rating size="small" value={5} readOnly />
                </MenuItem>
               {
                 addrating.map((item, index) => (
                  <MenuItem
                  key={index}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  onClick={() => setRatings((old) => item)}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    {item}
                  </Text>
                  <Rating size="small" value={Number(item)} readOnly />
                </MenuItem>
                 ))
               }
              </MenuList>
              <BiChevronDown fontSize={25} />
            </Menu>
          </Flex>
          
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
            onClick={() => setType((old) => "restaurants")}
          >
            <BiRestaurant fontSize={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Restaurants
            </Text>
          </Flex>

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
            onClick={() => setType((old) => "hotels")}
          >
            <BiHotel fontSize={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Hotels
            </Text>
          </Flex>

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
            onClick={() => setType((old) => "attractions")}
          >
            <BiMapAlt fontSize={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Attractions
            </Text>
            
          </Flex>

        </Flex>
      </Flex>
    </Flex>
  );
};
