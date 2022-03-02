import React from 'react';
import { Flex, Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { PlaceDetail } from './PlaceDetail';
export const List = ({ places, isLoading }) => {
  if (isLoading)
    return (
      <Flex
        flexDirection={"column"}
        bg={"whiteAlpha.900"}
        width={"37vw"}
        height="100vh"
        position={"absolute"}
        left={0}
        right={0}
        top={0}
        zIndex={1}
        overflow="hidden"
        px={2}
        paddingTop='3.5rem'
      >
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      </Flex>
    );

  return (
    <Flex
    flexDirection={"column"}
    bg={"whiteAlpha.900"}
    width={"37vw"}
    height="100vh"
    position={"absolute"}
    left={0}
    right={0}
    top={0}
    zIndex={1}
    overflow="hidden"
    px={2}
    paddingTop='3.5rem'
    >
      <Flex
      flex={1}
       overflowY={'scroll'}
       mt={3}
       direction={'column'}
      
      >

        {
          places && places.length>0 ? (places.map( (place, index) => (
             <PlaceDetail 
             key={index} 
             {...place}
             />
          ))) : null
        }
      </Flex>

    </Flex>
  );
};
