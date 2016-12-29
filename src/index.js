import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar.js';
import Map from './components/Map.js'
import Places from './components/Places.js'
import superagent from 'superagent'

//google maps api key
// const API_KEY = 'AIzaSyATwL4uEOxEdZYgb6t-YHFUGsQkgTgBu_o'

//this is a functional component
class App extends Component {

  constructor() {
    super()

    this.state = {
      venues: []
    }
  }

  componentDidMount(){
    console.log('yep, it mounted')

    const url = 'https://api.foursquare.com/v2/venues/search?ll=37.77,-122.41&client_id=U4BVKAV0XON43Z2ADZMXK4ERXYWA0P10ATASRIWZZJZXBJAJ&client_secret=3GXHLB4140JZ25TGJF410E2B4Q5VE2YBQIISGWPUWHV1O4CK&v=20161229'

    //as soon as the app component mounts, I make a request for data from FourSquare
    superagent
      .get(url)
      .query(null)
      .set('Accept','text/json')
      .end( (error, response) => {
        //this is an array of venues from the FourSquare response
        const venues = response.body.response.venues
        console.log(JSON.stringify(venues))
        this.setState({
          venues: venues
        })
      })
  }


  render() {
      const location = {
          lat: 37.77,
          lng: -122.41
        }

      const pins = [
          {
            location: {
              lat: 37.77,
              lng: -122.41
            }
          }
        ]

        return (
             <div>
                <SearchBar />
                <div className="map">
                  <Map location={location} pins={pins} />
                </div>
                <div className="places">
                  <Places venues={this.state.venues} />
                </div>
            </div>
            );
        }
}

ReactDOM.render(<App />, document.getElementById("hello"));