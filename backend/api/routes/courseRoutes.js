const express = require("express");
const router = express.Router();

//Get Courses
router.get("/", (req, res, next) => {
  res.status(200).json({
    msg: "Courses Routes Work"
  });
});

//Add Courses
router.post("/addCourse", (req, res, next) => {
  res.status(200).json({
    msg: "Courses Added"
  });
});

//Delete Courses
router.delete("/delete/:courseID", (req, res, next) => {
  res.status(200).json({
    msg: "Courses Deleted"
  });
});
//Add Content to courses
router.patch("/addFiles/:courseID", (req, res, next) => {
    res.status(200).json({
      msg: "Courses Deleted"
    });