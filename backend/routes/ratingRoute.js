const express = require("express");
const ratingRoute = express.Router();

const {
    getRatings
} = require("../Controllers/ratingController");

ratingRoute.get("/ratings", getRatings);

module.exports = ratingRoute;
