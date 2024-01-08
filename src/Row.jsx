import React, { useEffect } from 'react'
import axios from './axios';
import { useState } from 'react';

function Row({title},fetchUrl) {
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            console.log(request);
            return request;
        }
         
    },fetchUrl);
  return (
    <div>
        <h2>{title}</h2>
        <div className='row_posters'>
            {
                movies.map(movie=>(
                    
                    <img src={movie.poster_path} alt={movie.poster_path}/>
                ))
            }
        </div>

        {/* title */}
    </div>
  )
}

export default Row