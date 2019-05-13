import React, { Component } from 'react';
import PlacesPreview from "./PlacesPreview";

class PlacesList extends Component {
    constructor() {
        super();
        this.state = {
            showHideInfo: ''
        }
    }

    openInfoBlock() {
        this.setState({"showHideInfo": '-isInfoShown'});
    }

    render() {

        let places = this.props.places.map((place, i) => {
            return(
                <PlacesPreview key={i}
                               data={place}
                               currentPlace={this.props.currentPlace}
                               setCurrentPlace={this.props.setCurrentPlace}
                               openInfoBlock={this.openInfoBlock}
                               onClick={this.openInfoBlock}
                               index={i} />
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
