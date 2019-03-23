const express = require("express");
const router = express.Router();
const User = require("../models/User");
const mongoose = require("mongoose");
//Get Users-Either students or faculty
router.get("/", (req, res, next) => {
  User.find()
    .select("first_name last_name email _id")
    .exec()
    .then(users => {
      const response = {
        count: users.length,
        userInfo: users.map(user => {
          return {
            first_name: user.first_name,
            last_name: user.last_name,
            _id: user._id,
            request: {
              type: "GET",
              url: "http://localhost:5000/users/" + user._id
            }
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

//Post Users-Either students or faculty
router.post("/register", (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  });
  user.save().then(result => {
    console.log(result);
    res
      .status(201)
      .json({
        msg: "Created User ",
        createdUser: {
          first_name: result.first_name,
          last_name: result.last_name,
          email: result.email
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
});

//Get User
router.get("/:userId", (req, res, next) => {
  const id = req.params.userId;
  User.findById(id)
    .select("first_name last_name _id")
    .exec()
    .then(data => {
      console.log("From database", data);
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "No Record Found" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});
//Update User
//Note: updateOps is an array:When sending request to patch you should use and array like
//[
//   {
//     "propName":"phone_number","value":"213377844"
//   }
// ]
router.patch("/:userId", (req, res, next) => {
  const userID = req.params.userId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  User.update({ _ida: userID }, { $set: updateOps })
    .exec()
    .then(data => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(200).json({
        error: err
      });
    });
});

//No need to delete users not in requirement-Store for latter use
router.delete("/:userId", (req, res, next) => {
  const userID = req.params.userId;
  User.deleteOne({ _id: userID })
    .exec()
    .then(data => {
      if (data.length >= 0) {
        res.status(200).json(data);
      }
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
