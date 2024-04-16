const { sequelize } = require("../configuration/connectDb");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Student = require("../models/Student");
const { QueryTypes } = require("sequelize");
//const bcrypt = require("bcrypt");

const getStudents = async (request, response) => {
  try {
    const students = await sequelize.query("SELECT * FROM students", {
      type: QueryTypes.SELECT,
    });
    response.status(200).json({ students });
  } catch (error) {
    console.error("Error fetching students:", error);
    response
      .status(500)
      .json({ msg: "Error on getting students", error: error.message });
  }
};



const getOneStudent = async (req, res) => {
  const id = req.params.StudentID;
  try {
    const foundStudent = await Student.findByPk(id);
    if (foundStudent) {
      res.status(200).json({ student: foundStudent });
    } else {
      res.status(404).json({ msg: "Student not found" });
    }
  } catch (error) {
    console.error("Error on getting one student:", error);
    res
      .status(500)
      .json({ msg: "Error on getting one student", error: error.message });
  }
};

const login=async(req,res)=>{
  try{
    const { Email,Password } = req.body;
    const foundStudent = await sequelize.query("SELECT * FROM students WHERE Email = ?", {
      replacements: [Email], 
      type: QueryTypes.SELECT,
    });
  
    if (foundStudent.length > 0) {
      const student = foundStudent[0]; 
      if (student.Password === Password) {
        const token = jwt.sign(
          { StudentID: student.StudentID, UserType: student.UserType },
          process.env.JWT_SECRET
          );
          //res.cookie('token',token);
        res.status(200).json({ Success: "Login successful", student: student,token: token  });
      } else {
        res.json({ Error: "Invalid password" });
      }
    } else {
      res.json({ Error: "Email not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Server error" });
  }
}

const postStudent = async (request, response) => {
  try {
    const newStudent = request.body;
    const { Email } = newStudent; 
    const foundStudent = await sequelize.query("SELECT * FROM students WHERE Email = ?", {
      replacements: [Email], 
      type: QueryTypes.SELECT,
    });
    if (foundStudent.length > 0) {
      return response.status(400).json({ msg: "Student with this email already exists" });
    }
    const createdStudent = await Student.create(newStudent);
    response
      .status(200)
      .json({ student: createdStudent, msg: " Student addedsuccessfully" });
  } catch (error) {
    console.error("Error on adding student:", error);
    response
      .status(500)
      .json({ msg: "Error on adding student", error: error.message });
  }
};

const putStudent = async (req, res) => {
  const id = req.params.StudentID;
  const updatedData = req.body;
  try {
    const [updateCount] = await Student.update(updatedData, {
      where: { StudentID: id },
    });
    if (updateCount > 0) {
      res.status(200).json({ msg: "Student updated successfully" });
    } else {
      res.status(404).json({ msg: "Student not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error on updating student", error: error.message });
  }
};
const deleteStudent = async (req, res) => {
  const id = req.params.StudentID;
  try {
    const deleteCount = await Student.destroy({
      where: { StudentID: id },
    });
    if (deleteCount > 0) {
      res.status(200).json({ msg: "Student deleted successfully" });
    } else {
      res.status(404).json({ msg: "Student not found" });
    }
  } catch (error) {
    console.error("Error on deleting student:", error);
    res
      .status(500)
      .json({ msg: "Error on deleting student", error: error.message });
  }
};
module.exports = {
  postStudent,
  getStudents,
  getOneStudent,
  putStudent,
  deleteStudent,
  login
};