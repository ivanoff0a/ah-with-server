import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import NewPlaceModal from './../Modal/NewPlaceModal';


class MapComponent extends Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false
        }
    }

    mapClicked = (mapProps, map, clickEvent) => {
        let lat = clickEvent.latLng.lat();
        let lng = clickEvent.latLng.lng();
        this.props.addPlace({
            name: 'dfsрбурга',
            adress: 'dsf',
            lat: lat,
            lng: lng,
            style: '2 стиfdsль',
            architector: 'lalla',
            pic: 'https://lh5.googleusercontent.com/p/AF1QipOIOBOCAXkSnU0KytelSkehOsMZ_2kvNrCA-0W6=w155-h168-p-k-no',
            desc: 'lala'
        });
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
            <>
                <Map className='map__container'
                     google={this.props.google}
                     zoom={12}
                     initialCenter={{
                         lat: 59.946024,
                         lng: 30.326795
                     }}
                     onClick={this.mapClicked}>

                    {markers}
                </Map>
                <NewPlaceModal/>
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyB4PFkIZzqTwBwf5oIC0nDW4oAk0jJXwD4')
})(MapComponent)
