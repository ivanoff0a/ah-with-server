import React, { Component } from 'react';

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
                    <div className='places__container'>
                        <div className='place__item'>
                            <div className='place__info'>
                                <h4>Hotel Alexandra</h4>
                                <p>Baker Avenue</p>
                            </div>
                            <div className='place__img'>
                                <img alt='Place Image' src='https://cdn.dorsia.io/location_images/photos/000/052/712/medium/5df74e385914dadba4f88daedfb31187.jpg?1553032564'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
