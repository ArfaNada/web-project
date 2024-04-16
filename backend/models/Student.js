const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../configuration/connectDb");

const Student = sequelize.define(
  "students",
  {
    StudentID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Photo: {
      type: DataTypes.BLOB("long"),
    },
    UserType: {
      type: DataTypes.ENUM("student", "admin","tutor"),
      defaultValue: "student",
    },
  },
  { timestamps: false }
);

module.exports = Student;

