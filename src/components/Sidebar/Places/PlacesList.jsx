import React, { Component } from 'react';
import PlacesPreview from "./PlacesPreview";

class PlacesList extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        let places = this.props.places.map((place, i) => {
            return(
                <PlacesPreview key={i} data={place} /> // onClick={this.props.setCurrentPlace(i)}
            )
        })

        return (
            <div className='places__container'>
                {places}
            </div>
        );
    }
}

export default PlacesList;
