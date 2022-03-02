
import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";

export const Maps = ({coordinates, setCoordinates}) => {

  return (
    <Box width={"full"} height={"full"}>
      <GoogleMapReact
      bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}}
      defaultCenter={coordinates}
      center= {coordinates}
      defaultZoom = {10}
      margin = {[50,50,50,50]}
      options={""}
      onChange={()=>{}}
      onChildClick={()=>{}}
      ></GoogleMapReact>
    </Box>
  );
};
