import React, { Component } from 'react';

class PlacesCard extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (
            <div className='places__container'>
                {places}
            </div>
        );
    }
}

export default PlacesCard;
