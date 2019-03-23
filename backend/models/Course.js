const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define(
  "courses",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    course_ID: {
      type: Sequelize.STRING
    },
    course_name: {
      type: Sequelize.STRING
    },
    course_dept: {
      type: Sequelize.STRING
    },
    course_description: {
      type: Sequelize.STRING
    },
    course_room: {
      type: Sequelize.STRING
    },
    course_capacity: {
      type: Sequelize.STRING
    },
    faculty_email: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);
