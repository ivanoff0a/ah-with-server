const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const MONGODB = "mongodb://localhost/architecture_heaven";

mongoose.connect(MONGODB, {
    useNewUrlParser: true
});
require('./models/PlaceModel');
require('./routes/place_route')(app);

const PORT = process.env.PORT || 3005;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Here we go on PORT ${PORT}`)
});


