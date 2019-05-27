import React, { Component } from "react";
import PlacesList from "./Places/PlacesList";
import profile__logo from "../../assets/img/profile__logo_new.png";
import menu__logo from "../../assets/img/menu__logo.png";
import hide__logo from "../../assets/img/hide__logo.png";

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const classesSidebar = "sidebar__body" + " " + this.props.showHideSidebar;

    return (
      <>
        <div className="sidebar__header">
          <div className="header__menu">
            <img src={menu__logo} alt="Menu" />
          </div>
          <div className="header__logo">
            <h1>Architectural Heaven</h1>
          </div>
          <div className="header__profile">
            <img src={profile__logo} alt="Profile" />
          </div>
          <div className="header__hide" onClick={this.props.toggleSidebar}>
            <img className={this.props.showHideArrow} src={hide__logo} />
          </div>
        </div>
        <div className={classesSidebar}>
          <PlacesList
            places={this.props.places}
            currentPlace={this.props.currentPlace}
            showHideInfo={this.props.showHideInfo}
            openInfoBlock={this.props.openInfoBlock}
            closeInfoBlock={this.props.closeInfoBlock}
            setCurrentPlace={this.props.setCurrentPlace}
          />
        </div>

      </>
    );
  }
}

export default Sidebar;

