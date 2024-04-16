const express = require("express");
const appointmentRoute = express.Router();

const {
    getAppointments,
    postAppointment
} = require("../Controllers/appointmentController");

appointmentRoute.get("/appointments", getAppointments);
appointmentRoute.post("/appointments", postAppointment);

module.exports = appointmentRoute;
