import React, { Component } from 'react';
import del__icon from './../../../assets/img/del__icon.svg';
import adress__icon from './../../../assets/img/sight__logo.png'
import style__icon from './../../../assets/img/style__logo.png'
import arch__icon from './../../../assets/img/arch__logo.png'
import desc__icon from './../../../assets/img/desc__logo.png'

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
                    <div className='info__item'>
                        <div className='info__h'>
                            <div className='info__icon'>
                                <img src={adress__icon}/>
                            </div>
                            <div className='info__name'>
                                <p>Адрес:</p>
                            </div>
                        </div>
                        <div  className='info__p'>
                            <p>{this.props.currentPlace.adress}</p>
                        </div>
                    </div>
                    <div className='info__item-row'>
                        <div className='info__item style__item'>
                            <div className='info__h'>
                                <div className='info__icon'>
                                    <img src={style__icon}/>
                                </div>
                                <div className='info__name'>
                                    <p>Стиль:</p>
                                </div>
                            </div>
                            <div  className='info__p'>
                                <p>{this.props.currentPlace.style}</p>
                            </div>
                        </div>
                        <div className='info__item arch__item'>
                            <div className='info__h'>
                                <div className='info__icon'>
                                    <img src={arch__icon}/>
                                </div>
                                <div className='info__name'>
                                    <p>Архитектор:</p>
                                </div>
                            </div>
                            <div  className='info__p'>
                                <p>{this.props.currentPlace.architector}</p>
                            </div>
                        </div>
                    </div>
                    <div className='info__item'>
                        <div className='info__h'>
                            <div className='info__icon'>
                                <img src={desc__icon}/>
                            </div>
                            <div className='info__name'>
                                <p>Описание:</p>
                            </div>
                        </div>
                        <div  className='info__p'>
                            <p>{this.props.currentPlace.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlacesCard;
