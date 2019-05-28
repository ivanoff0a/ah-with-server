import axios from 'axios/index';

const apiRequestService = {
  createPlace: (newPlace) => {
    return axios.post('http://localhost:3005/api/place', {
      name: newPlace.name,
      address: newPlace.address,
      lat: newPlace.lat,
      lng: newPlace.lng,
      style: newPlace.style,
      architector: newPlace.architector,
      pic: newPlace.pic,
      desc: newPlace.desc
    })
  },

  getPlaces: () => {
    return axios.get('http://localhost:3005/api/place/all');
  },

  getPlaceByName: (name) => {
    return axios.get('http://localhost:3005/api/place', {
      params: {
        name: name
      }
    });
  },

  updatePlaceData: (newData) => {
    return axios.put('http://localhost:3005/api/place', {
      oldName: newData.oldName,
      newName: newData.newName,
      newDesc: newData.newDesc
    });
  },

  deletePlace: (name) => {
    return axios.delete('http://localhost:3005/api/place', {
      params: {
        name: name
      }
    });
  },


};

export default apiRequestService;
