import { Box, Flex, Text, Image } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
import { IoLocation } from "react-icons/io5";
import UsehookMaps from "../hooks/UsehookMaps";


export const Maps = ({ coordinates, setCoordinates, setBounds, places }) => {
  const { cardState, isCard,hideCardMaps,
    showCardMaps
    ,clickCheckPoint } = UsehookMaps();

  return (
    <Box width={"full"} height={"full"}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates((old) => {
            return { lat: e.center.lat, lng: e.center.lng };
          });
          setBounds((old) => {
            return { ne: e.marginBounds.ne, sw: e.marginBounds.sw };
          });
        }}
      >
        {places.map((place, index) => (
          <Box
            key={index}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            position={"relative"}
            cursor="pointer"
            onMouseEnter={() => showCardMaps(index)}
            onMouseLeave={() => hideCardMaps()}
            onClick={clickCheckPoint}
          >
            <IoLocation
              style={{ position: "absolute" }}
              color="red"
              size={35}
            />
            {isCard === true && cardState?.name === place?.name ? (
              <Box
                width={"200px"}
                height={"150px"}
                background={"whiteAlpha.900"}
                position={"absolute"}
                zIndex={3000}
                transform="auto"
                translateY={"-120px"}
                translateX={"-80px"}
                transition={"ease-in-out"}
                transitionDuration={"0.3s"}
                left={0}
                top={-12}
                overflow="hidden"
                shadow={"lg"}
                rounded={"lg"}
              >
                <Flex flex={1} flexDirection={"column"}>
                  <Image
                    objectFit={"cover"}
                    width={"200px"}
                    height={"120px"}
                    rounded={"lg"}
                    roundedBottom={"none"}
                    src={
                      cardState?.photo
                        ? cardState?.photo?.images?.large?.url
                        : "https://explorelompoc.com/wp-content/uploads/2021/06/food_placeholder.jpg"
                    }
                  />
                  <Box>
                    <Text fontSize={"sm"} fontWeight={500} color={"gray.500"} isTruncated>
                      {cardState.name}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ) : null}
          </Box>
        ))}
      </GoogleMapReact>
    </Box>
  );
};
