const express = require("express");
const studentRoute = express.Router();

const {
  postStudent,
  getStudents,
  getOneStudent,
  putStudent,
  deleteStudent,
  login,
} = require("../Controllers/studentController");

const isAuth = require("../middleware/isAuth")


studentRoute.get("/students", getStudents);
studentRoute.post("/students", postStudent);
studentRoute.post("/login", login);
studentRoute.put("/students/:StudentID",  isAuth,putStudent);
studentRoute.delete("/students/:StudentID", deleteStudent);
studentRoute.get("/students/:StudentID",  isAuth, getOneStudent);

module.exports = studentRoute;
