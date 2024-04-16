const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../configuration/connectDb");
const Student = require("./Student");
const Subject = require("./Subject");

const Application = sequelize.define('Applications', {
    RequestID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    SubjectGrade: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    SendingDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Result: {
        type: DataTypes.STRING,
    },
},
{ timestamps: false },);

Application.belongsTo(Student, { foreignKey: 'StudentID' });
Application.belongsTo(Subject, { foreignKey: 'SubjectID' });

module.exports = Application;
