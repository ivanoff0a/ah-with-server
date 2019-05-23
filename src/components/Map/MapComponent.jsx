import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import Modal from "react-modal";
import Geocode from "react-geocode";
import photo__logo from "./../../assets/img/photo__logo.PNG";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

class MapComponent extends Component {
  constructor() {
    super();
    this.state = {
      userCoordinates: {},
      userAdress: "",
      modalIsOpen: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  mapClicked = (mapProps, map, clickEvent) => {
    let newUserCoordinates = {
      lat: clickEvent.latLng.lat(),
      lng: clickEvent.latLng.lng()
    };
    this.setState({ userCoordinates: newUserCoordinates });
    Geocode.fromLatLng(
      this.state.userCoordinates.lat,
      this.state.userCoordinates.lng
    ).then(
      response => {
        let adressValue = response.results[0].formatted_address;
        if (adressValue === "") {
          adressValue = "Не известно";
        }
        this.setState({ userAdress: adressValue });
      },
      error => {
        console.error(error);
      }
    );
    this.setState({ modalIsOpen: true });
  };

  onMarkerClick = (props, marker, e) => {
    this.props.setCurrentPlace(props.data, props.index);
    this.props.openInfoBlock();
    if (this.props.showHideSidebar === "-isHidden") {
      this.props.toggleSidebar();
    }
  };

  onSubmit(event) {
    event.preventDefault();
    let picValue = this.picTextField.value;
    let descValue = this.descTextField.value;
    let architectorValue = this.architectorTextField.value;
    let styleValue = this.styleTextField.value;
    let nameValue = this.nameTextField.value;

    if (picValue === "") {
      picValue = photo__logo;
    }
    if (nameValue === "") {
      nameValue = "Не известно";
    }
    if (styleValue === "") {
      styleValue = "Не известно";
    }
    if (architectorValue === "") {
      architectorValue = "Не известно";
    }
    if (descValue === "") {
      descValue = "Не известно";
    }

    if (this.props.addPlace) {
      this.props.addPlace({
        name: nameValue,
        adress: this.state.userAdress,
        lat: this.state.userCoordinates.lat,
        lng: this.state.userCoordinates.lng,
        style: styleValue,
        architector: architectorValue,
        pic: picValue,
        desc: descValue
      });
    }
    this.setState({ modalIsOpen: false });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }



  render() {
    Geocode.setApiKey("AIzaSyB4PFkIZzqTwBwf5oIC0nDW4oAk0jJXwD4");
    console.log(this.props.google);
    let markers = this.props.places.map((marker, i) => {
      return (
        <Marker
          key={i}
          index={i}
          data={marker}
          // animation= {this.props.google.maps.Animation.BOUNCE}
          title={marker.name}
          position={{ lat: marker.lat, lng: marker.lng }}
          onClick={this.onMarkerClick}
        />
      );
    });

    return (
      <>
        <Map
          className="map__container"
          google={this.props.google}
          zoom={12}
          initialCenter={{
            lat: 59.946022,
            lng: 30.326798
          }}
          onClick={this.mapClicked}
        >
          {markers}
        </Map>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="New Place Modal"
        >
          <h4 className="form__headline">Добавьте свое место</h4>
          <div className="form__container">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Название</label>
                <input
                  ref={name => (this.nameTextField = name)}
                  type="text"
                  placeholder="Введите название"
                  className="form-control__custom"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Стиль</label>
                <input
                  ref={style => (this.styleTextField = style)}
                  type="text"
                  placeholder="Введите название стиля"
                  className="form-control__custom"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  Архитектор (необязательно)
                </label>
                <input
                  ref={architector => (this.architectorTextField = architector)}
                  type="text"
                  placeholder="Введите ФИО архитектора"
                  className="form-control__custom"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  Картинка (необязательно)
                </label>
                <input
                  ref={pic => (this.picTextField = pic)}
                  type="text"
                  placeholder="Введите ссылку картинки"
                  className="form-control__custom"
                />
              </div>
              <div className="form-group form-group-desc">
                <label htmlFor="exampleInputEmail1">
                  Описание (необязательно)
                </label>
                <input
                  ref={desc => (this.descTextField = desc)}
                  type="text"
                  placeholder="Добавьте описание"
                  className="form-control__custom"
                />
              </div>
              <div className="btn-group">
                <button onClick={this.closeModal} className=" btn btn__close">
                  Закрыть
                </button>
                <button type="submit" className="btn btn__add">
                  Добавить
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB4PFkIZzqTwBwf5oIC0nDW4oAk0jJXwD4"
})(MapComponent);
