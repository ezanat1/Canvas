const express = require("express");
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../database/db");
const Student_Info = require("../models/Users");
const Course = require("../models/Course");
const Registration = require("../models/Registration");
//test db
router.use(cors());

process.env.SECRET_KEY = "Ekmys@123";

router.post("/register", (req, res) => {
  const dataToday = new Date();
  const studentData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    created: dataToday
  };
  console.log(studentData);

  Course.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(student => {
      if (!student) {
        Student_Info.create(studentData)
          .then(student => {
            res.json({
              status: student.email + "registered"
            });
          })
          .catch(err => {
            res.send("error" + err);
          });
      } else {
        res.json({
          error: "Student already registered"
        });
      }
    })
    .catch(err => {
      res.send("error" + err);
    });
});

router.post("/login", (req, res) => {
  Student_Info.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(student => {
      if (student) {
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

// router.post("/update", (req, res) => {
//   const dataToday = new Date();
//   const studentData = {
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     phoneNumber: req.body.phoneNumber,
//     about_me: req.body.about_me,
//     city: req.body.city,
//     country: req.body.country,
//     company: req.body.company,
//     school: req.body.school,
//     hometown: req.body.hometown,
//     language: req.body.language,
//     gender: req.body.gender,
//     created: dataToday
//   };
//   console.log(studentData);

//   Student_Info.findOne({
//     where: {
//       email: req.body.email
//     }
//   })
//     .then(student => {
//       if (student) {
//         bcrypt.hash(req.body.password, 10, (err, hash) => {
//           studentData.password = hash;
//           Student_Info.update(studentData, {
//             where: {
//               email: req.body.email
//             }
//           })
//             .then(student => {
//               res.json({
//                 status: req.body.email + " updated"
//               });
//             })
//             .catch(err => {
//               res.send("error" + err);
//             });
//         });
//       } else {
//         res.json({
//           error: "No User Found"
//         });
//       }
//     })
//     .catch(err => {
//       res.send("error" + err);
//     });
// });
// router.post("/searchCourses", (req, res) => {
//   const studentData = {
//     input: req.body.input
//   };
//   Student_Info.findOne({
//     where: {
//       email: req.body.email
//     }
//   })
//     .then(student => {
//       if (student) {
//         bcrypt.hash(req.body.password, 10, (err, hash) => {
//           studentData.password = hash;
//           Student_Info.update(studentData, {
//             where: {
//               email: req.body.email
//             }
//           })
//             .then(student => {
//               res.json({
//                 status: req.body.email + " updated"
//               });
//             })
//             .catch(err => {
//               res.send("error" + err);
//             });
//         });
//       } else {
//         res.json({
//           error: "No User Found"
//         });
//       }
//     })
//     .catch(err => {
//       res.send("error" + err);
//     });
// });
//Return Classes
router.get("/class", function(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  Course.findAll({}).then(course => {
    res.end(JSON.stringify(course));
  });
});

//Search classes
router.post("/searchClass", function(req, res) {
  console.log("Inside Search GET: ", req.body);

  let course_id = req.body.classSearch;
  let course_Name = req.body.classSearch;

  let options = { where: {} };
  // if (course_id) {
  //   options.where.course_ID = {$in:course_id};
  // }
  if (course_Name) {
    options.where.course_name = course_Name;
  }

  Course.findAll(options).then(course => {
    res.send(JSON.stringify(course));
  });

  // console.log("Search result : ", JSON.stringify(searchResult));
  // res.end(JSON.stringify(searchResult));
});

router.post("/registerclass", (req, res) => {
  const student_email = req.body.student_email;
  const course_ID = req.body.courseID;
  const register = {
    student_email: student_email,
    courseID: course_ID
  };
  Registration.create(register).then(res => {
    JSON.stringify(student_email + " registerd");
  });
});

module.exports = router;
