// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export const getTravelData = async (type,sw, ne) => {
  const url=`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;

const options ={
  params: {
    bl_latitude: sw.lat,
    tr_latitude: ne.lat,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng,
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '9215efe589msh1ef42f046bdfbe3p11f695jsnf286089d210b'
  }
};
      try{
        const {data:{data}} = await axios.get(url,options)
        return data
      }catch(err) {
    
        return err
      }
     
}

