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
    'x-rapidapi-key': '889d084971mshcbf6c1a399b2097p1ed71ejsn3d5a9d16c2a8'
  }
};

      try{
        const {data:{data}} = await axios.get(url,options)
        return data
      }catch(err) {
    
        return err
      }
     
}

