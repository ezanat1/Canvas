const express = require("express");
const faculty = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../database/db");
const Course = require("../models/Course");
const Faculty = require("../models/Faculty");
faculty.use(cors());

process.env.SECRET_KEY = "Ekmys@123";

faculty.post("/register", (req, res) => {
  const dataToday = new Date();
  const facultyData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    created: dataToday
  };
  console.log(facultyData);

  Faculty.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(faculty => {
      if (!faculty) {
        Faculty.create(facultyData)
          .then(faculty => {
            res.json({
              status: faculty.email + "registered"
            });
          })
          .catch(err => {
            res.send("error" + err);
          });
      } else {
        res.json({
          error: "faculty already registered"
        });
      }
    })
    .catch(err => {
      res.send("error" + err);
    });
});

faculty.post("/login", (req, res) => {
  Faculty.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(faculty => {
      if (faculty) {
        if (bcrypt.compareSync(req.body.password, student.password)) {
          let token = jwt.sign(student.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.send(token);
        } else {
          res.status(400).json({
            error: "User do not exist"
          });
        }
      }
    })
    .catch(err => {
      res.status(400).json({
        error: err
      });
    });
});
faculty.post("/addCourse", (req, res) => {
  const dataToday = new Date();
  const courseItem = {
    course_ID: req.body.course_ID,
    course_name: req.body.course_name,
    course_dept: req.body.course_dept,
    course_room: req.body.course_room,
    course_description: req.body.course_description,
    course_capacity: req.body.course_capacity,
    faculty_email: req.body.faculty_email
  };

  Course.findOne({
    where: {
      course_ID: req.body.course_ID
    }
  })
    .then(course => {
      if (!course) {
        Course.create(courseItem)
          .then(course => {
            res.json({
              status: course.course_ID + "Added to database"
            });
          })
          .catch(err => {
            res.send("error" + err);
          });
      } else {
        res.json({
          error: "Course Already exist in database"
        });
      }
    })
    .catch(err => {
      res.send("error" + err);
    });
});

faculty.get("/Course", (req, res) => {
  console.log("why not working", req.query.facultyEmail);
  Course.findAll({
    where: {
      faculty_email: req.query.facultyEmail
    }
  }).then(course => {
    res.json(course);
  });
});

module.exports = faculty;
