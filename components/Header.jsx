import React from "react";
import { Flex, InputGroup, InputRightElement, Input, Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import { Autocomplete } from "@react-google-maps/api";
import { BiChevronDown, BiRestaurant, BiSearch, BiStar } from "react-icons/bi";
import { Rating } from "@material-ui/lab";

export const Header = ({ type, setType, ratings, setRatings }) => {
  return (
    <Flex
      position={"absolute"}
      width={"full"}
      px={4}
      py={2}
      zIndex={101}
      top={0}
      left={0}
    >
     <Flex>
        <InputGroup width={'35vw'} shadow="lg">
          <InputRightElement
            pointerEvents={"none"}
            // eslint-disable-next-line react/no-children-prop
            children={<BiSearch color="gray" fontSize={20} />}
          />
          <Input 
          type={'text'}
          placeholder="Search Google Map..."
          variant={'filled'}
          fontSize={18}
          bg={'white'}
          color={'gray.700'}
          _hover={{bg: 'whiteAlpha.800'}}
          _focus={{bg:'whiteAlpha.800'}}
          _placeholder={{color:'gray.700'}}
          />
        </InputGroup>

        <Flex
        alignItems={'center'}
        justifyContent={'center'}

        >
          <Flex
          alignItems={'center'}
          justifyContent={'center'}
          px={4}
          py={2}
          bg={'white'}
          rounded={'full'}
          ml={4}
          shadow='lg'
          cursor={'pointer'}
          _hover={{bg:'gray.100'}}
          transition={'ease-in-out'}
          transitionDuration={'0.3s'}
          >
           <Menu>
              <BiStar fontSize={25}  />
              <MenuButton mx={2} transition="all 0.2s" borderRadius={'md'}>
                 Choose ratings
              </MenuButton>
              <MenuList>
                <MenuItem
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                onClick={()=> setRatings(old => ' ' )}
                >
                  <Text 
                  fontSize={20}
                  fontWeight={500}
                  color={'gray.700'}

                  >All Ratings</Text>
                </MenuItem>

                <MenuItem
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                onClick={()=> setRatings(old => 2 )}
                >
                  <Text
                  fontSize={20}
                  fontWeight={500}
                  color={'orange.500'}
                  >2.0</Text>
                  <Rating  
                  size="small"
                  value={2}
                  readOnly
                  />
                </MenuItem>

                <MenuItem
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                onClick={()=> setRatings(old => 3 )}
                >
                  <Text
                  fontSize={20}
                  fontWeight={500}
                  color={'orange.500'}
                  >3.0</Text>
                  <Rating  
                  size="small"
                  value={3}
                  readOnly
                  />
                </MenuItem>
                <MenuItem
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                onClick={()=> setRatings(old => 4 )}
                >
                  <Text
                  fontSize={20}
                  fontWeight={500}
                  color={'orange.500'}
                  >4.0</Text>
                  <Rating  
                  size="small"
                  value={4}
                  readOnly
                  />
                </MenuItem>
                <MenuItem
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                onClick={()=> setRatings(old => 5 )}
                >
                  <Text
                  fontSize={20}
                  fontWeight={500}
                  color={'orange.500'}
                  >5.0</Text>
                  <Rating  
                  size="small"
                  value={5}
                  readOnly
                  />
                </MenuItem>
               
              </MenuList>
              <BiChevronDown fontSize={25}/>
           </Menu>
           
          </Flex>
          {/*restaurantes*/}
          <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    px={4}
                    py={2}
                    bg={'white'}
                    rounded={'full'}
                    ml={4}
                    shadow='lg'
                    cursor={'pointer'}
                    _hover={{bg:'gray.100'}}
                    transition={'ease-in-out'}
                    transitionDuration={'0.3s'}
                    onClick={()=>setType(old => 'restaurants')}
          >
            <BiRestaurant fontSize={25}/>
            <Text ml={3} fontSize={16} fontWeight={500} >Restaurants</Text>
          </Flex>
        </Flex>
     </Flex>
    </Flex>
  );
};
