import React, { Component } from "react";
import MapComponent from "./components/Map/MapComponent";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Routes from "./constants/Routes.js";
import apiRequestService from "./services/apiRequestService";
import mockDataService from "./services/mockDataService";

class App extends Component {
    constructor() {
        super();
        this.state = {
            showHideInfo: "",
            showHideSidebar: "-isShown",
            showHideArrow: "",
            currentPlace: {},
            places: []
        };
    }

    // showSidebar(event){
    //   if(event.keyCode === 39) {
    //     this.setState({ showHideSidebar: '-isShown' });
    //   }
    // }
    //
    // hideSidebar(event){
    //   if(event.keyCode === 37) {
    //     this.setState({ showHideSidebar: '-isHidden' });
    //   }
    // }
    //
    // componentDidMount(){
    //   document.addEventListener("keydown", this.showSidebar, false);
    //   document.addEventListener("keydown", this.hideSidebar, false);
    // }
    //
    // componentWillUnmount(){
    //   document.removeEventListener("keydown", this.showSidebar, false);
    //   document.removeEventListener("keydown", this.hideSidebar, false);
    // }

    componentDidMount() {
        // Метод для наполнения базы данных моковыми данными - просто раскомментируем его и получаем в базу все необходимое
        // mockDataService.createMockData();

        // Метод для получения всех данных с сервера
        // раскомментировать после предыдущего
        // отдельно от него и использовать при каждом запуске
        this.getAllPlaces();
    }

    async getAllPlaces() {
        const response = await apiRequestService.getPlaces();
        if (!response.error && response.data.places) {
            let places = response.data.places;
            this.setState({places: places});
            console.log(this.state.places);
        } else {
            this.setState({places: 'Empty over here'});
        }
    }

    addPlace = async place => {
        const response = await apiRequestService.createPlace(place);
        console.log("This is the success result", response);

        let newPlaces = this.state.places;
        newPlaces.push(response.data.place);
        this.setState({ places: newPlaces });
    };

    setCurrentPlace = (place, i) => {
        this.setState({ currentPlace: place });
    };

    openInfoBlock = () => {
        this.setState({ showHideInfo: "-isInfoShown" });
    };

    closeInfoBlock = () => {
        this.setState({ showHideInfo: "" });
    };

    toggleSidebar = () => {
        var cssSidebar =
            this.state.showHideSidebar === "-isHidden" ? "-isShown" : "-isHidden";
        this.setState({ showHideSidebar: cssSidebar });
        var cssArrow =
            this.state.showHideArrow === "-isHiddenAngle" ? "" : "-isHiddenAngle";
        this.setState({ showHideArrow: cssArrow });
    };

    render() {
        return (
            <div className="main__container">
                <Sidebar
                    places={this.state.places}
                    currentPlace={this.state.currentPlace}
                    setCurrentPlace={this.setCurrentPlace}
                    showHideInfo={this.state.showHideInfo}
                    showHideSidebar={this.state.showHideSidebar}
                    showHideArrow={this.state.showHideArrow}
                    toggleSidebar={this.toggleSidebar}
                    openInfoBlock={this.openInfoBlock}
                    closeInfoBlock={this.closeInfoBlock}
                />
                <MapComponent
                    places={this.state.places}
                    addPlace={this.addPlace}
                    currentPlace={this.state.currentPlace}
                    setCurrentPlace={this.setCurrentPlace}
                    showHideInfo={this.state.showHideInfo}
                    showHideSidebar={this.state.showHideSidebar}
                    showHideArrow={this.state.showHideArrow}
                    toggleSidebar={this.toggleSidebar}
                    openInfoBlock={this.openInfoBlock}
                    closeInfoBlock={this.closeInfoBlock}
                />
            </div>
        );
    }
}

export default App;
