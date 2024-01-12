import React, { useEffect } from 'react'
import axios from './axios';
import { useState } from 'react';

const baseBaseUrl="https://image.tmdb.org/t/p/original";

function Row({title,fetchUrl }) {
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
            <div className='row_posters'>
        
                {movies.map(movie => (
                    
                    <img key={movie.id} src={`${baseBaseUrl}${movie.backdrop_path}`} alt={`${baseBaseUrl}${movie.backdrop_path}`} />
                ))}
            </div>
        </div>

        
    
  )
}

export default Row