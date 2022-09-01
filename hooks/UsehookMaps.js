import { useEffect, useState } from 'react'
import {getTravelData} from '../pages/api'

const UsehookMaps = () => {

    const [coordinates, setCoordinates] = useState({ ne: 0, sw: 0 });
    const [bounds, setBounds] = useState(null);
    const [type, setType] = useState("restaurants");
    const [ratings, setRatings] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [addrating, setAddRating] = useState([]);
    const [isCard, setIsCard] = useState(false);
    const [cardState, setCardState] = useState(null);
  

    useEffect( () => {
      setIsLoading(true);
      const addgetFunctionApi=async(type,sw, ne)=>{
  
        if(JSON.parse(localStorage.getItem('data'))){
          const res =JSON.parse(localStorage.getItem('data')).reduce((acc,item)=>{
            if(!acc.includes(item.rating) && item.rating !==undefined){
                acc.push(item.rating);
            }
              return acc
          },[]).sort()
          setAddRating(old => {
            return res
          })
          setPlaces(old => {
            const df = JSON.parse(localStorage.getItem('data'));
            return df.filter(item => item.name !== undefined)
          })
        }else{
          const dat = await getTravelData(type,sw, ne);
          localStorage.setItem('data', JSON.stringify(dat))
          if(JSON.parse(localStorage.getItem('data'))){
            setPlaces(old => {
              const da = JSON.parse(localStorage.getItem('data'));
              return da.filter(item => item.name !== undefined) 
            })
           }
         }
         setIsLoading(false);
        }
                  
      
       if(bounds?.sw && bounds.ne){
        addgetFunctionApi(type,bounds.sw, bounds.ne);
       }
  
    }, [type,coordinates, bounds]);
  
    useEffect(()=>{
         const filterData = places.filter( item => item.rating === ratings)
         setFilteredPlaces( old => {
           return filterData;
         })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ratings])

    const hideCardMaps = () => {
      console.log('false')
      setIsCard(false);
    };
    const showCardMaps = (index) => {
      console.log(places)
      setCardState((old) => {
        return places[index];
      });
      setIsCard(true);
    };
  
    const clickCheckPoint=()=>{
      console.log('log')
    }
  
  
  


 return {
    coordinates, setCoordinates,
    bounds, setBounds,
    type, setType,
    ratings, setRatings,
    isLoading, setIsLoading,
    places, setPlaces,
    filteredPlaces, setFilteredPlaces,
    addrating, setAddRating,
    isCard,
    setIsCard,
    cardState,
    hideCardMaps,
    showCardMaps,
    clickCheckPoint
 }
}

export default UsehookMaps