const { sequelize } = require("../configuration/connectDb");
require("dotenv").config();
const Appointment = require("../models/Appointment");
const { QueryTypes } = require("sequelize");

const getAppointments = async (request, response) => {
    try {
      const appointments = await sequelize.query("SELECT * FROM appointments", {
        type: QueryTypes.SELECT,
      });
      response.status(200).json({ appointments });
    } catch (error) {
      console.error("Error fetching appointments:", error);
      response
        .status(500)
        .json({ msg: "Error on getting appointments", error: error.message });
    }
  };


//   const postAppointment = async (request, response) => {
//     try {
//         const { time, location, subjectID, tutorID, studentID } = request.body;
//         const newAppointment = await Appointment.create({
//             State:"pending",
//             Time:time,
//             Location:location,
//             SendingDate:new Date(),
//             SubjectID:subjectID,
//             TutorID:tutorID,
//             StudentID:studentID
//         });
//         response.status(201).json({ appointment: newAppointment, msg: "Appointment created successfully" });
//     } catch (error) {
//         console.error("Error creating appointment:", error);
//         response.status(500).json({ msg: "Error creating appointment", error: error.message });
//     }
// };


//post an appointment
const postAppointment = async (request, response) => {
  try {
    const { time, location, subjectName, tutorName } = request.body;

    // Find the student based on their name
    const student = await Student.findOne({
      where: {
        Name: request.user.Name, // Assuming the logged-in user's name is available in request.user
      },
    });

    if (!student) {
      return response.status(404).json({ msg: "Student not found" });
    }

    // Find the tutor based on their name
    const tutor = await Tutor.findOne({
      where: {
        TutorID: tutorName, // Assuming tutorName is the tutor's ID
      },
    });

    if (!tutor) {
      return response.status(404).json({ msg: "Tutor not found" });
    }

    // Find the subject based on its name
    const subject = await Subject.findOne({
      where: {
        SubjectName: subjectName,
      },
    });

    if (!subject) {
      return response.status(404).json({ msg: "Subject not found" });
    }

    const newAppointment = await Appointment.create({
      State: "pending",
      Time: time,
      Location: location,
      SendingDate: new Date(),
      SubjectID: subject.SubjectID,
      TutorID: tutor.TutorID,
      StudentID: student.StudentID,
    });

    response.status(201).json({ appointment: newAppointment, msg: "Appointment created successfully" });
  } catch (error) {
    console.error("Error creating appointment:", error);
    response.status(500).json({ msg: "Error creating appointment", error: error.message });
  }
};





//get one appointment notifications

const getAppointmentNotif = async (request, response) => {
  try {
    // Assuming you have the student ID stored in the JWT token
    const studentId = request.user.StudentID;

    const appointments = await sequelize.query(
      "SELECT * FROM appointments WHERE StudentID = :studentId",
      {
        replacements: { studentId },
        type: QueryTypes.SELECT,
      }
    );

    response.status(200).json({ appointments });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    response
      .status(500)
      .json({ msg: "Error on getting appointments", error: error.message });
  }
};



  module.exports={getAppointments,postAppointment,getAppointmentNotif};