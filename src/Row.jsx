import React, { useEffect } from 'react'
import axios from './axios';
import { useState } from 'react';
import Rowcss from './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const baseBaseUrl="https://image.tmdb.org/t/p/original";

function Row({title,fetchUrl,isLargeRow }) {

    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

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

    const opt={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        },
    };

    const handleClick=(movie)=>{
        console.log('handleClick called with movie:', movie);

        if(trailerUrl){
            setTrailerUrl("");
        }
        else{
            movieTrailer(movie?.title||"").
            then((url) => {
                
                if(url){
                    
                   console.log("url is ",url);
                   const urlParams=new URLSearchParams( new URL(url).search);
                    setTrailerUrl( urlParams.get('v'));

                }
                
            }).catch((error)=>console.log(error));
        }
    };

  return (
    
        <div className='row'>
            <h2>{title}</h2>
            <div className={`row_posters  `}>
                       
                {movies.map( movie => (
                    
                    <img key={movie.id} 
                    onClick={()=>handleClick(movie)}
                    className={`row_poster ${ isLargeRow && "row_posterLarge"}`}  src={`${baseBaseUrl}${ isLargeRow ? movie.backdrop_path:movie.backdrop_path}`} alt={`${baseBaseUrl}${movie.backdrop_path}`} />
                ))}
            </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opt}/>}
        </div>

        
    
  )
}

export default Row