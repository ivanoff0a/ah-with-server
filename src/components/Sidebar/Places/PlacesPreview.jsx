import React, { Component } from 'react';

class PlacesPreview extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className='place__item'>
                <div className='place__info'>
                    <h4>{this.props.data.name}</h4>
                    <p>{this.props.data.adress}</p>
                </div>
                <div className='place__img'>
                    <img alt='Place' src={this.props.data.pic}/>
                </div>
            </div>
        );
    }
}

export default PlacesPreview;
