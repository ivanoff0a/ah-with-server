import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapComponent extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {


        return (
            <Map className='map__container'
                 google={this.props.google}
                 zoom={14}
                 initialCenter={{
                     lat: 59.950348,
                     lng: 30.316440
                 }}
            >

                <Marker
                    title={'Дом книги'}
                    name={'Дом книги'}
                    position={{lat: 59.936073, lng: 30.325734}} />
                <Marker
                    title={'Дом книги'}
                    name={'Дом книги'}
                    position={{lat: 59.933893, lng: 30.329601}} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyB4PFkIZzqTwBwf5oIC0nDW4oAk0jJXwD4')
})(MapComponent)
