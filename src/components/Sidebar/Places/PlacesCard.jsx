import React, { Component } from 'react';

class PlacesCard extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        const classesCard = 'info__container' + ' ' + this.props.showHideInfo;
        return (
            <div className={classesCard} >

            </div>
        );
    }
}

export default PlacesCard;
