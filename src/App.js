import logo from './logo.svg';
import './App.css';

import Row from './Row';
import { useState } from 'react';
import request from './requests.js';

function App() {



  return (
    <div className="App"> 
      <Row title=" NETFLEX ORIGINAL" fetchUrl={request.fetchNetflexOriginals}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />

    </div>
  );
}

export default App;
