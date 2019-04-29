import React, { Component } from 'react';
import PlacesItemComponent from "./PlacesItemComponent";

class PlacesListComponent extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className='places__container'>
                <PlacesItemComponent/>
                <PlacesItemComponent/>
                <PlacesItemComponent/>
                <PlacesItemComponent/>
                <PlacesItemComponent/>
                <PlacesItemComponent/>
                <PlacesItemComponent/>
                <PlacesItemComponent/>
                <PlacesItemComponent/>
                <PlacesItemComponent/>
            </div>
        );
    }
}

export default PlacesListComponent;
