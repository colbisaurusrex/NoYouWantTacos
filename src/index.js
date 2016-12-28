import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar.js';
import Map from './components/Map.js'
import Places from './components/Places.js'

//google maps api key
// const API_KEY = 'AIzaSyATwL4uEOxEdZYgb6t-YHFUGsQkgTgBu_o'

//this is a functional component
const App = () => {
  return (
   <div>
      <SearchBar />
      <div className="map">
        <Map />
      </div>
      <div className="places">
        <Places />
      </div>
  </div>
    )
}

ReactDOM.render(<App />, document.getElementById("hello"));