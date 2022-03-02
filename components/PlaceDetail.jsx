/* eslint-disable jsx-a11y/alt-text */
import { Flex, Text, Image, Badge } from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";
import {IoLocation} from 'react-icons/io5'
export const PlaceDetail = ({
  name,
  price,
  photo,
  rating,
  num_reviews,
  price_level,
  ranking,
  open_now_text,
  dietary_restrictions,
  address
}) => {
  return (
    <Flex
      bg={"whiteAlpha.900"}
      px={4}
      py={2}
      mb={2}
      shadow="lg"
      direction={"column"}
      alignItems={"start"}
      justifyContent="space-between"
    >
      <Flex justifyContent={"space-between"} width="full">
        <Flex
          direction={"column"}
          justifyContent="start"
          alignItems={"start"}
          width="full"
          px={2}
        >
          <Flex
            alignItems={"center"}
            width={"full"}
            justifyContent={"space-between"}
          >
            <Text
              textTransform={"capitalize"}
              width={"40"}
              fontSize={"lg"}
              fontWeight={500}
              isTruncated
            >
              {name}
            </Text>
            <Text fontSize={"sm"} fontWeight={500} color={"gray.500"}>
              {price}
            </Text>
          </Flex>
          {/*rating*/}
          <Flex alignItems={"center"} width={"full"}>
            <Rating size="small" value={Number(rating)} readOnly />
            <Text
              fontSize={"sm"}
              fontWeight={"500"}
              color={"gray.500"}
            >{`${num_reviews}`}</Text>
            <Text
              fontSize={"sm"}
              fontWeight={"500"}
              color={"gray.500"}
              ml="auto"
            >
              {price_level}
            </Text>
          </Flex>

          <Text fontSize={"sm"} fontWeight={"500"} color={"gray.500"}>
            {ranking}
          </Text>

          <Text fontSize={"sm"} fontWeight={"500"} color={"gray.600"}>
            {open_now_text}
          </Text>
          {/*dietary_restriccions*/}
          {dietary_restrictions ? (
            <Flex width={"full"} flexWrap={"wrap"} gap={2}>
              {dietary_restrictions.map((item, index) => (
                <Badge key={index}
                colorScheme={'teal'}
                cursor={'pointer'}

                >{item.name}</Badge>
              ))}
            </Flex>
          ) : null}
        </Flex>
        <Image
          objectFit={"cover"}
          src={photo?.images.large.url}
          width={"120px"}
          height={"120px"}
          rounded="lg"
        />
      </Flex>
      {
        address? (
           <Flex
           alignItems={'center'}
           width={'full'}
           px={1}
           my={2}

           >
          <IoLocation fontSize={20} col='gray' />
          <Text
          isTruncated
          fontSize={'small'}
          fontWeight={500}
          color={'gray.700'}
          ml={1}
          >
            {address}
          </Text>
           </Flex>
        ) : null
      }
    </Flex>
  );
};
