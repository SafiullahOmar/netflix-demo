import React, { useEffect } from 'react'
import axios from './axios';
import { useState } from 'react';
import Rowcss from './Row.css';
const baseBaseUrl="https://image.tmdb.org/t/p/original";

function Row({title,fetchUrl,isLargeRow }) {
    const [movies,setMovies]=useState([]);

    useEffect(()=>{
        console.log(axios);
        async function fetchData() {
            try {
                const request = await axios.get(fetchUrl);
                console.log('Request:', request);
                setMovies(request.data.results);
                return request;
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle errors as needed
            }
        }

        fetchData();
         
    },[fetchUrl]);

  return (
    
        <div className='row'>
            <h2>{title}</h2>
            <div className={`row_posters ${ isLargeRow && "row_posterLarge"} `}>
                       
                {movies.map(movie => (
                    
                    <img key={movie.id} className='row_poster'  src={`${baseBaseUrl}${ isLargeRow ? movie.backdrop_path:movie.backdrop_path}`} alt={`${baseBaseUrl}${movie.backdrop_path}`} />
                ))}
            </div>
        </div>

        
    
  )
}

export default Row