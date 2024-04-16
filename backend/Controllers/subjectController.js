const { sequelize } = require("../configuration/connectDb");
require("dotenv").config();
const Subject = require("../models/Subject");
const { QueryTypes } = require("sequelize");

const getSubjects = async (request, response) => {
    try {
      const subjects = await sequelize.query("SELECT * FROM subjects", {
        type: QueryTypes.SELECT,
      });
      response.status(200).json({ subjects });
    } catch (error) {
      console.error("Error fetching subjects:", error);
      response
        .status(500)
        .json({ msg: "Error on getting subjects", error: error.message });
    }
  };
  const getOneSubject = async (request, response) => {
    try {
        const { subjectName } = request.params; 
        const subject = await sequelize.query("SELECT * FROM subjects WHERE SubjectName = :subjectName", {
            replacements: { subjectName },
            type: QueryTypes.SELECT,
        });

        if (subject.length === 0) {
            return response.status(404).json({ msg: "Subject not found" });
        }

        response.status(200).json({ subject: subject[0] }); 
    } catch (error) {
        console.error("Error fetching subject:", error);
        response.status(500).json({ msg: "Error getting subject", error: error.message });
    }
};

  const postSubject = async (request, response) => {
    try {
    const newSubject = request.body;
    const createdSubject = await Subject.create(newSubject);
    response.status(200).json({ subject: createdSubject, msg: "Subject addedsuccessfully" });
    } catch (error) {
    console.error("Error on adding subject:", error);
    response
    .status(500)
    .json({ msg: "Error on adding subject", error: error.message });
    }
    };
    
  module.exports={getSubjects,postSubject,getOneSubject};