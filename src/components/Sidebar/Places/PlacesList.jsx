import React, { Component } from 'react';
import PlacesPreview from "./PlacesPreview";
import PlacesCard from "./PlacesCard";

class PlacesList extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        let places = this.props.places.map((place, i) => {
            return(
                <PlacesPreview key={i}
                               data={place}
                               currentPlace={this.props.currentPlace}
                               setCurrentPlace={this.props.setCurrentPlace}
                               showHideInfo={this.props.showHideInfo}
                               onClick={this.props.openInfoBlock}
                               index={i} />
            )
        })

        return (
            <>
                <div className='places__container'>
                    {places}
                </div>
                <PlacesCard showHideInfo={this.props.showHideInfo}/>
            </>
        );
    }
}

export default PlacesList;
