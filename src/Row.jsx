import React, { useEffect } from 'react'
import axios from './axios';

function Row({title},fetchUrl) {
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            console.log(request);
            return request;
        }
        
    },[]);
  return (
    <div>
        <h2>{title}</h2>

        {/* title */}
    </div>
  )
}

export default Row