const mongoose = require("mongoose");
const PlaceModel = mongoose.model("PlaceModel");

const createPlace = async (name, address, lat, lng, pic, architector, style, desc) => {
    const place = new PlaceModel({
        name: name,
        address: address,
        lat: lat,
        lng: lng,
        style: style,
        architector: architector,
        pic: pic,
        desc: desc
    });
    return await place.save();
};

const getPlaceByName = async (name) => {
    return await PlaceModel.findOne({name: name});
};

const getAllPlaces = async () => {
    return await PlaceModel.find();
};

const deletePlace = async (place) => {
    return await place.remove();
};

const updatePlace = async (place, newName, newDesc) => {
    place.name = newName;
    place.desc = newDesc;

    return await place.save();
};

module.exports = {
    createPlace,
    getPlaceByName,
    getAllPlaces,
    updatePlace,
    deletePlace
};
