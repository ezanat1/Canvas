const express = require("express");
const router = express.Router();
const Course = require("../models/Course");
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  Course.find()
    .exec()
    .then(data => {
      const response = {
        count: data.length,
        course: data.map(singleData => {
          return {
            courseID: singleData.courseID,
            courseName: singleData.courseName,
            courseDept: singleData.courseDept,
            courseDescription: singleData.courseDescription,
            courseRoom: singleData.courseRoom,
            waitListCap: singleData.waitListCap,
            courseTeam: singleData.courseTeam
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
router.post("/addCourse", (req, res, next) => {
  const newCourse = new Course({
    _id: new mongoose.Types.ObjectId(),
    courseID: req.body.courseID,
    courseName: req.body.courseName,
    courseDept: req.body.courseDept,
    courseDescription: req.body.courseDescription,
    courseRoom: req.body.courseRoom,
    waitListCap: req.body.waitListCap,
    courseTeam: req.body.courseTeam
  });

  newCourse
    .save()
    .then(result => {
      res.status(201).json({
        msg: "Course Created Succesfully",
        courseCreated: {
          courseID: req.body.courseID,
          courseName: req.body.courseName,
          courseDept: req.body.courseDept,
          courseDescription: req.body.courseDescription,
          courseRoom: req.body.courseRoom,
          waitListCap: req.body.waitListCap,
          courseTeam: req.body.courseTeam
        }
      });
    })
    .catch(err => {
      console.log(err);
      error: err;
    });
});
router.delete("/:id", (req, res, next) => {
  Course.find()
    .exec()
    .then(data => {
      const response = {
        count: data.length,
        course: data.map(singleData => {
          return {
            courseID: singleData.courseID,
            courseName: singleData.courseName,
            courseDept: singleData.courseDept,
            courseDescription: singleData.courseDescription,
            courseRoom: singleData.courseRoom,
            waitListCap: singleData.waitListCap,
            courseTeam: singleData.courseTeam
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
module.exports = router;
