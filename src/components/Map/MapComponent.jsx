import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesPreview from "../Sidebar/Places/PlacesList";

class MapComponent extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        let markers = this.props.places.map((marker, i) => {
            return(
                <Marker key={i}
                        title={marker.name}
                        position={{lat: marker.lat,
                            lng: marker.lng}}
                />
            )
        })

        return (
            <Map className='map__container'
                 google={this.props.google}
                 zoom={14}
                 initialCenter={{
                     lat: 59.946024,
                     lng: 30.326795
                 }}>

                {markers}

            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyB4PFkIZzqTwBwf5oIC0nDW4oAk0jJXwD4')
})(MapComponent)
