import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar.js';
import Map from './components/Map.js'

//google maps api key
const API_KEY = 'AIzaSyATwL4uEOxEdZYgb6t-YHFUGsQkgTgBu_o'

//this is a functional component
const App = () => {
  return (
   <div>
      <div>
        <SearchBar />
        <Map />
      </div>
      <div className="tacoList">
        this is where the list of taco joints will go.
      </div>
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById("hello"));