const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define(
  "registrations",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    student_email: {
      type: Sequelize.STRING
    },
    courseID: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);
