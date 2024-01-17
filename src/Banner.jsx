import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './requests';
function Banner() {
  const [movie,setMovie]=useState([]);
  useEffect(()=>{
    async function fetchData(){
      const request=await axios.get(requests.fetchNetflexOriginals);
      setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
      return request; 
    }
    fetchData();
  },[]);
  return (
    <header>

    </header>
  )
}

export default Banner