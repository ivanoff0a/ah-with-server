import React, { Component } from 'react';
import del__icon from './../../../assets/img/del__icon.svg';

class PlacesCard extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        const classesCard = 'info__container' + ' ' + this.props.showHideInfo;
        return (
            <div className={classesCard} >
                <div className='info__hide' onClick={this.props.closeInfoBlock}>
                    <img src={del__icon}/>
                </div>
                <h1>{this.props.currentPlace.name}</h1>
                <div className='info__img' >
                    <img src={this.props.currentPlace.pic}/>
                </div>
                <div className='info__text'>
                    <p>{this.props.currentPlace.adress}</p>
                    <p>{this.props.currentPlace.style}</p>
                    <p>{this.props.currentPlace.architector}</p>
                    <p>{this.props.currentPlace.desc}</p>
                </div>
            </div>
        );
    }
}

export default PlacesCard;
