import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapComponent extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <Map className='map__container' google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyB4PFkIZzqTwBwf5oIC0nDW4oAk0jJXwD4')
})(MapComponent)
