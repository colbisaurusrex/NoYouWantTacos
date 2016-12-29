import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {


  render() {

    const mapContainer = <div style={{height: '100%', width: '100%'}}></div>

    const pins = this.props.pins.map((venue, i)=>{
        const pin = {
          position: {
            lat: venue.location.lat,
            lng: venue.location.lng
          }
        }

        //... is a spread operator
        //Marker is a component imported from react-google-maps
        return <Marker key={i} {...pin} />
    })

    return (
        <GoogleMapLoader
            containerElement = { mapContainer }
            googleMapElement = {
              <GoogleMap
                  defaultZoom = {16}
                  defaultCenter={this.props.location}
                  options = {{streetViewControl: false, mapTypeControl: true}}>
                  {pins}
                  </GoogleMap>
            } />
      );

  }
};

export default Map;