import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { PlaceDetail, List, Maps, Header, Layout } from "../components";
import {getTravelData} from './api'


const Home = () => {
  const [coordinates, setCoordinates] = useState({ ne: 0, sw: 0 });
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState(null)

  useEffect(() => {
    //location ip
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        setCoordinates((old) => {
          return { lat: latitude, lng: longitude };
        })
    );
  }, []);

  useEffect( () => {
    setIsLoading(true);
    const addgetFunctionApi=async(ratings,type,sw, ne)=>{
      const dat = await getTravelData(type,sw, ne);
      console.log(dat)
        if(dat.length>1){
          setPlaces(old => {
            return dat.filter(item => item.name !== undefined)
          
        })
        }
      setIsLoading(false);
     }
     if(bounds?.sw && bounds.ne){
      addgetFunctionApi(ratings,type,bounds.sw, bounds.ne);
     }

  }, [type,coordinates, bounds,ratings]);

  return (
    <Layout>
      <Header
        type={type}
        setType={setType}
        ratings={ratings}
        setRatings={setRatings}
      />
      <List places={places} isLoading={isLoading} />
      <Maps coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds}/>
    </Layout>
  );
};

export default Home;
