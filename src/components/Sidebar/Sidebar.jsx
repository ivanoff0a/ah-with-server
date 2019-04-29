import React, { Component } from 'react';
import PlacesList from './Places/PlacesList';

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className='sidebar__container'>
                <div className='sidebar__header'>
                    <h1>Architectural Heaven</h1>
                </div>
                <div className='sidebar__body'>
                    <h1>Places</h1>
                    <PlacesList places={this.props.places}/>
                </div>
            </div>
        );
    }
}

export default Sidebar;
