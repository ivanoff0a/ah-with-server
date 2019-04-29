import React, { Component } from 'react';
import MapComponent from './components/Map/MapComponent'
import Sidebar from './components/Sidebar/Sidebar.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
        places : [
            {
                name: '1 place',
                adress: '1 адрес',
                lat:  59.936073,
                lng: 30.325734,
                style: '1 стиль',
                architector: '1 архитектор',
                pic: 'https://cdn.dorsia.io/location_images/photos/000/052/712/medium/5df74e385914dadba4f88daedfb31187.jpg?1553032564',
                desc: '1 описание'
            },
            {
                name: '2 название',
                adress: '2 адрес',
                lat: 59.976024,
                lng: 30.376795,
                style: '2 стиль',
                architector: '2 архитектор',
                pic: 'https://cdn.dorsia.io/location_images/photos/000/052/712/medium/5df74e385914dadba4f88daedfb31187.jpg?1553032564',
                desc: '2 описание'
            },
            {
                name: '3 название',
                adress: '3 адрес',
                lat: 59.733893,
                lng: 30.329601,
                style: '3 стиль',
                architector: '3 архитектор',
                pic: 'https://cdn.dorsia.io/location_images/photos/000/052/712/medium/5df74e385914dadba4f88daedfb31187.jpg?1553032564',
                desc: '3 описание'
            },
            {
                name: '4 название',
                adress: '4 адрес',
                lat: 59.946024,
                lng: 30.326795,
                style: '4 стиль',
                architector: '4 архитектор',
                pic: 'https://cdn.dorsia.io/location_images/photos/000/052/712/medium/5df74e385914dadba4f88daedfb31187.jpg?1553032564',
                desc: '4 описание'
            }
        ]
    }
  }

  render() {
    return (
        <div className='main__container'>
          <Sidebar places={this.state.places} />
          <MapComponent places={this.state.places}/>
        </div>
    );
  }
}

export default App;
