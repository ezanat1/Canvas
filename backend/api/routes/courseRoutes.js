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
  const course = {
    courseID: req.body.courseID,
    courseName: req.body.courseName,
    courseDept: req.body.courseDept,
    courseDesc: req.body.courseDesc,
    courseRoom: req.body.courseRoom,
    waitListCap: req.body.waitListCap,
    courseTeam: req.body.courseTeam
  };
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
});

module.exports = router;
