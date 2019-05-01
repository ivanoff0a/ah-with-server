import React, { Component } from 'react';
import PlacesList from './Places/PlacesList';
import profile__logo from '../../assets/img/profile__logo_new.png';

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className='sidebar__container'>
                <div className='sidebar__header'>
                    <div className='header__logo'>
                        <h1>Architectural Heaven</h1>
                    </div>
                    <div className='header__profile'>
                        <img src={profile__logo} alt='Profile'/>
                    </div>
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
