import {useState, useEffect} from 'react'
import {Flex} from '@chakra-ui/react';
import { PlaceDetail,List,Maps,Header,Layout} from '../components'
const Home=()=>{

  const [coordinates, setCoordinates] = useState({lat:0, lng:0});
  const [type, setType] = useState('restaurants');
  const [ratings, setRatings] = useState("");

  useEffect(()=>{
    if(ratings) console.log(`buscar rating de ${ratings}`)
  },[ratings])


  return (
    <Layout>
       <Header 
       type={type}
       setType={setType}
       ratings={ratings}
       setRatings={setRatings}
       />
      <List />
      <Maps  coordinates={coordinates} setCoordinates={setCoordinates}/>
    </Layout>
  )
}

export default Home