const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define(
  "facultyusers",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    phoneNumber: {
      type: Sequelize.STRING
    },
    about_me: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    company: {
      type: Sequelize.STRING
    },
    school: {
      type: Sequelize.STRING
    },
    hometown: {
      type: Sequelize.STRING
    },
    language: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);
