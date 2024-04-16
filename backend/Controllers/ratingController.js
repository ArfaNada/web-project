const { sequelize } = require("../configuration/connectDb");
require("dotenv").config();
const Rating = require("../models/Rating");
const { QueryTypes } = require("sequelize");

const getRatings = async (request, response) => {
    try {
      const ratings = await sequelize.query("SELECT * FROM ratings", {
        type: QueryTypes.SELECT,
      });
      response.status(200).json({ ratings });
    } catch (error) {
      console.error("Error fetching ratings:", error);
      response
        .status(500)
        .json({ msg: "Error on getting ratings", error: error.message });
    }
  };

//post rating,rate a tutor
const postRating = async (request, response) => {
  try {
    const { studentID, tutorName, subject, appointmentDate, appointmentPlace, ratingValue } = request.body;

    // Get TutorID based on TutorName
    const tutor = await Tutor.findOne({
      where: {
        TutorID: studentID,
      },
      include: [{ model: Student, attributes: ['Name'], where: { Name: tutorName } }],
    });

    if (!tutor) {
      return response.status(404).json({ msg: "Tutor not found" });
    }

    // Get SubjectID based on Subject
    const subjectObj = await Subject.findOne({
      where: {
        SubjectName: subject,
      },
    });

    if (!subjectObj) {
      return response.status(404).json({ msg: "Subject not found" });
    }

    // Check if an appointment exists with the given criteria
    const appointment = await Appointment.findOne({
      where: {
        StudentID: studentID,
        Time: appointmentDate, // Assuming appointmentDate is the same format as in the database
        Location: appointmentPlace,
        TutorID: tutor.TutorID,
        SubjectID: subjectObj.SubjectID,
        State: "done",
      },
    });

    if (!appointment) {
      return response.status(404).json({ msg: "No matching appointment found" });
    }

    // Update the rating attribute in the appointment
    appointment.rating = ratingValue;
    await appointment.save();

    response.status(200).json({ msg: "Rating updated successfully" });
  } catch (error) {
    console.error("Error updating rating:", error);
    response.status(500).json({ msg: "Error updating rating.", error: error.message });
  }
};









  module.exports={getRatings};