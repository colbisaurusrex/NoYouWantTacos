import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar.js';
import Map from './components/Map.js'
import TacoList from './components/TacoList.js'

//google maps api key
const API_KEY = 'AIzaSyATwL4uEOxEdZYgb6t-YHFUGsQkgTgBu_o'

//this is a functional component
const App = () => {
  return (
   <div>
      <SearchBar />
      <Map />
      <TacoList />
  </div>
    )
}

ReactDOM.render(<App />, document.getElementById("hello"));