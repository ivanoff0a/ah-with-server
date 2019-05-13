import React, { Component } from 'react';

class PlacesCard extends Component {
    constructor() {
        super();
        this.state = {
            showHideInfo: ''
        }
    }

    openInfoBlock() {
        this.setState({"showHideInfo": '-isInfoShown'});
    }

    render() {
        const classesCard = 'info__container' + ' ' + this.state.showHideInfo;
        return (
            <div className={classesCard} >

            </div>
        );
    }
}

export default PlacesCard;
