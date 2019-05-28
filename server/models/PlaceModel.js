const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    lat: {type: Number, required: true},
    lng: {type: Number, required: true},
    style: {type: String, required: true},
    architector: {type: String, required: true},
    pic: {type: String, required: true},
    desc: {type: String, required: true}
});

PlaceSchema.methods.get_public_data = function() {
    return {
        name: this.name,
        address: this.address,
        lat: this.lat,
        lng: this.lng,
        style: this.style,
        architector: this.architector,
        pic: this.pic,
        desc: this.desc
    };
};

module.exports = mongoose.model('PlaceModel', PlaceSchema);

