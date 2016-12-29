import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar.js';
import Map from './components/Map.js'
import Places from './components/Places.js'

//google maps api key
// const API_KEY = 'AIzaSyATwL4uEOxEdZYgb6t-YHFUGsQkgTgBu_o'

//this is a functional component
class App extends Component {



      render() {
      const location = {
          lat: 28.61,
          lng: 77.20
        }

      const pins = [
          {
            location: {
              lat: 28.61,
              lng: 77.20
            }
          }
        ]

        return (
             <div>
                <SearchBar />
                <div className="map">
                  <Map location={location} pins={pins}/>
                </div>
                <div className="places">
                  <Places />
                </div>
            </div>
            );
        }
}

ReactDOM.render(<App />, document.getElementById("hello"));