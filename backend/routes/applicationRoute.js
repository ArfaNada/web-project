const express = require("express");
const applicationRoute = express.Router();

const {
    getApplications,
    postApplication,
    putApplication
} = require("../Controllers/applicationController");

applicationRoute.get("/applications", getApplications);
applicationRoute.post("/applications", postApplication);
applicationRoute.put("/applications/:RequestID", putApplication);

module.exports = applicationRoute;
