const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../configuration/connectDb");
const Student = require("./Student");
const Tutor = require("./Tutor");

const Rating = sequelize.define('Ratings', {
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
{ timestamps: false },);

Rating.belongsTo(Tutor, { foreignKey: 'TutorID' });
Rating.belongsTo(Student, { foreignKey: 'StudentID' });

module.exports = Rating;
