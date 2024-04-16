const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../configuration/connectDb");

const Subject = sequelize.define("subjects", {
  SubjectID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  SubjectName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{ timestamps: false }
);
module.exports = Subject;
