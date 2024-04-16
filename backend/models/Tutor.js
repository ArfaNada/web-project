const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../configuration/connectDb");
const Student = require("./Student");
const Subject = require("./Subject");

const Tutor = sequelize.define(
  "Tutors",
  {
    TutorID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  { timestamps: false }
);

Tutor.belongsTo(Student, { foreignKey: "StudentID" });
Tutor.belongsTo(Subject, { foreignKey: "SubjectID" });

module.exports = Tutor;
