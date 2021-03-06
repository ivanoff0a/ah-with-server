import React, { Component } from "react";
import PlacesPreview from "./PlacesPreview";
import PlacesCard from "./PlacesCard";
import { Route, Switch } from "react-router-dom";

class PlacesList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let places = this.props.showHideInfo
      ? ""
      : this.props.places.map((place, i) => {
          return (
            <PlacesPreview
              key={i}
              data={place}
              currentPlace={this.props.currentPlace}
              setCurrentPlace={this.props.setCurrentPlace}
              showHideInfo={this.props.showHideInfo}
              openInfoBlock={this.props.openInfoBlock}
              index={i}
            />
          );
        });

    return (
      <>
        <div className="places__container">
          <h1 style={this.props.showHideInfo ? { display: "none" } : null}>
            Места
          </h1>
          {places}
        </div>
        {/*<Route*/}
        {/*  path="/places/:index"*/}
        {/*  render={ props => (*/}
            <PlacesCard
              showHideInfo={this.props.showHideInfo}
              currentPlace={this.props.currentPlace}
              closeInfoBlock={this.props.closeInfoBlock}
            />
        {/*  )}*/}
        {/*/>*/}
      </>
    );
  }
}

export default PlacesList;
