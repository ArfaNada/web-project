const express = require("express");
const subjectRoute = express.Router();

const {
    getSubjects,
    postSubject,
    getOneSubject
} = require("../Controllers/subjectController");

subjectRoute.get("/subjects", getSubjects);
subjectRoute.get("/subjects/:subjectName", getOneSubject);
subjectRoute.post("/subjects", postSubject);

module.exports = subjectRoute;
