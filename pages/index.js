/* eslint-disable @next/next/no-sync-scripts */
import { useEffect } from "react";
import { List, Maps, Header, Layout } from "../components";
import UsehookMaps  from '../hooks/UsehookMaps'


const Home = () => {

  const {   
    coordinates, setCoordinates,
     setBounds,
    type, setType,
    ratings, setRatings,
    isLoading,
    places,
    filteredPlaces,
    addrating
  } = UsehookMaps();


  useEffect(() => {
    //location ip
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        setCoordinates((old) => {
          return { lat: latitude, lng: longitude };
        })
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Header
        type={type}
        setType={setType}
        ratings={ratings}
        setRatings={setRatings}
        addrating={addrating}
        setCoordinates={setCoordinates}
      />
       <List places={filteredPlaces.length>0? filteredPlaces :  places} isLoading={isLoading} />
       
      <Maps coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds} places={filteredPlaces.length>0? filteredPlaces :  places}/>
  
      </Layout>
  );
};

export default Home;

