import React, { Component } from 'react';
import PlacesList from './Places/PlacesList';
import profile__logo from '../../assets/img/profile__logo_new.png';
import menu__logo from '../../assets/img/menu__logo.png';
import hide__logo from '../../assets/img/hide__logo.png'

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            showHideSidebar: '-isShown',
            showHideArrow: ' '
        }
    }

    toggleSidebar() {
        var cssSidebar = (this.state.showHideSidebar === "-isHidden") ? "-isShown" : "-isHidden";
        this.setState({"showHideSidebar": cssSidebar});
        var cssArrow = (this.state.showHideArrow === "-isHiddenAngle") ? " " : "-isHiddenAngle";
        this.setState({"showHideArrow": cssArrow});
    }

    render() {
        const classesSidebar = 'sidebar__body' + ' ' + this.state.showHideSidebar;
        return (
            <div className='sidebar__container'>
                <div className='sidebar__header'>
                    <div className='header__menu'>
                        <img src={menu__logo} alt='Menu'/>
                    </div>
                    <div className='header__logo'>
                        <h1>Architectural Heaven</h1>
                    </div>
                    <div className='header__profile'>
                        <img src={profile__logo} alt='Profile'/>
                    </div>
                    <div className='header__hide' onClick={this.toggleSidebar.bind(this)}>
                        <img className={this.state.showHideArrow} src={hide__logo}/>
                    </div>
                </div>
                <div className={classesSidebar}>
                    <h1>Места</h1>
                    <PlacesList places={this.props.places}
                                currentPlace={this.props.currentPlace}
                                setCurrentPlace={this.props.setCurrentPlace}/>
                </div>
            </div>
        );
    }
}

export default Sidebar;
