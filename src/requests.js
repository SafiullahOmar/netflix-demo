const APIKEY="f9ea5c8d99705d6236d858d3deaa4eae"
const requests={
    fetchTrending:`/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflexOriginals:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchTopRatedMovies:`/discover/movie?api_key=${APIKEY}&with_genres=99`,
    
}

export default requests;