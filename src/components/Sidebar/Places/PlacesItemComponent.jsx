import React, { Component } from 'react';

class PlacesItemComponent extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className='place__item'>
                <div className='place__info'>
                    <h4>Hotel Alexandra</h4>
                    <p>Baker Avenue</p>
                </div>
                <div className='place__img'>
                    <img alt='Place Image' src='https://cdn.dorsia.io/location_images/photos/000/052/712/medium/5df74e385914dadba4f88daedfb31187.jpg?1553032564'/>
                </div>
            </div>
        );
    }
}

export default PlacesItemComponent;
