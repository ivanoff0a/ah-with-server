import React, { Component } from 'react';
import PlacesCard from "./PlacesCard";

class PlacesPreview extends Component {
    constructor() {
        super();
        this.state = {}
    }

    onPreviewClick = () => {
        this.props.setCurrentPlace(this.props.data, this.props.index);
        this.props.openInfoBlock();
    }

    render() {
        return (
            <>
                <div className='place__item' onClick={this.onPreviewClick}>
                    <div className='place__info'>
                        <h4>{this.props.data.name}</h4>
                        <p>{this.props.data.adress}</p>
                    </div>
                    <div className='place__img'>
                        <img alt='Place' src={this.props.data.pic}/>
                    </div>
                </div>
            </>
        );
    }
}

export default PlacesPreview;
