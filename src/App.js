import React, { Component } from 'react';
import MapComponent from './components/MapComponent'
import Sidebar from './components/Sidebar'

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
        <div className='main__container'>
          <Sidebar/>
          <MapComponent/>
        </div>
    );
  }
}

export default App;
