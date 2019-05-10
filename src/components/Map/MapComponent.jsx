import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '500px'
    }
};

Modal.setAppElement('#root');

class MapComponent extends Component {
    constructor() {
        super();
        this.state = {
            userCoordinates: {},
            modalIsOpen: false
        };

        // this.openModal = this.openModal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    mapClicked = (mapProps, map, clickEvent) => {
        let newUserCoordinates = {
            lat: clickEvent.latLng.lat(),
            lng: clickEvent.latLng.lng()
        }
        this.setState({'userCoordinates':  newUserCoordinates});
        this.setState({modalIsOpen: true});
    }

    onSubmit(event) {
        event.preventDefault();
        if(this.props.addPlace) {
            this.props.addPlace({
                name: this.nameTextField.value,
                adress: this.adressTextField.value,
                lat: this.state.userCoordinates.lat,
                lng: this.state.userCoordinates.lng,
                style: this.styleTextField.value,
                architector: this.architectorTextField.value,
                pic: this.picTextField.value,
                desc: this.descTextField.value,
            });
        }
        this.setState({modalIsOpen: false});
    }

    // openModal() {
    //     this.setState({modalIsOpen: true});
    // }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {

        let markers = this.props.places.map((marker, i) => {
            return(
                <Marker key={i}
                        title={marker.name}
                        position={{lat: marker.lat,
                            lng: marker.lng}}
                />
            )
        })

        return (
            <>
                <Map className='map__container'
                     google={this.props.google}
                     zoom={12}
                     initialCenter={{
                         lat: 59.946024,
                         lng: 30.326795
                     }}
                     onClick={this.mapClicked}>

                    {markers}
                </Map>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="New Place Modal"
                >
                    <h3>Добавьте свое место</h3>
                    <div className="form__container">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Название</label>
                                <input ref={(name) => this.nameTextField = name}
                                       type="text"
                                       placeholder="Введите название"
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Адрес</label>
                                <input ref={(adress) => this.adressTextField = adress}
                                       type="text"
                                       placeholder="Введите адрес"
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Стиль</label>
                                <input ref={(style) => this.styleTextField = style}
                                       type="text"
                                       placeholder="Введите название стиля"
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Архитектор (необязательно)</label>
                                <input ref={(architector) => this.architectorTextField = architector}
                                       type="text"
                                       placeholder="Введите ФИО архитектора"
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Картинка</label>
                                <input ref={(pic) => this.picTextField = pic}
                                       type="text"
                                       placeholder="Введите ссылку картинки"
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Описание</label>
                                <input ref={(desc) => this.descTextField = desc}
                                       type="text"
                                       placeholder="Добавьте описание"
                                       className="form-control"/>
                            </div>
                            <button type="submit"
                                    className="btn btn-primary">Добавить</button>
                        </form>
                    </div>
                </Modal>
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyB4PFkIZzqTwBwf5oIC0nDW4oAk0jJXwD4')
})(MapComponent)
