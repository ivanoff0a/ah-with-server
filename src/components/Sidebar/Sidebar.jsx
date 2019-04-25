import React, { Component } from 'react';
import PlacesListComponent from './Places/PlacesListComponent';

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
                    <PlacesListComponent/>
                </div>
            </div>
        );
    }
}

export default Sidebar;
