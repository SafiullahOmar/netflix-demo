import logo from './logo.svg';
import './App.css';

import Row from './Row';
import { useState } from 'react';
import request from './requests.js';

function App() {



  return (
    <div className="App"> 
      <Row title=" NETFLEX ORIGINAL" fetchUrl={request.fetchNetflexOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horro Movies" fetchUrl={request.fetchHororMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentries} />

    </div>
  );
}

export default App;
