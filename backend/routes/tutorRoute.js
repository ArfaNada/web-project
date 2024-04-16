const express = require("express");
const tutorRoute = express.Router();

const {
    getTutors,
    postTutor
} = require("../Controllers/tutorController");

tutorRoute.get("/tutors", getTutors);
tutorRoute.post("/tutors", postTutor);

module.exports = tutorRoute;
