const place_dao = require('../daos/PlaceDao');

const getAllPlaces = async () => {
    const places = await place_dao.getAllPlaces();
    if (!places) {
        return {
            isError: true,
            error: 'CANT_FIND'
        }
    } else {
        return {
            places: places
        }
    }
};

const getPlaceByName = async (projectName) => {
    const place = await place_dao.getPlaceByName(projectName);
    if (!place) {
        return {
            isError: true,
            error: 'CANT_FIND'
        }
    } else {
        return {
            place: project
        }
    }
};

const createPlace = async (name, address, lat, lng, pic, architector, style, desc) => {
    const place = await place_dao.createPlace(name, address, lat, lng, pic, architector, style, desc);

    console.log('this is supposed to be a model', place);

    if (!place) {
        return {
            isError: true,
            error: 'UNKNOWN_EXEPTION'
        }
    } else {
        return place
    }
};

const updatePlace = async (oldName, newName, newDesc) => {
    const place = await place_dao.getPlaceByName(oldName);
    if (!place){
        return {
            error: 'No Place Like This in a DataBase'
        }
    }

    const result = await place_dao.updatePlace(project, newName, newDesc);
    return place;
};

const deletePlace = async (name) => {
    const response = await place_dao.deletePlace(name);
    console.log('AFTER DELETE', response);

    if (!response) {
        return response;
    }
};

module.exports = {
    getPlaceByName,
    createPlace,
    getAllPlaces,
    updatePlace,
    deletePlace
};
