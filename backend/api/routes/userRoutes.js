const express = require("express");
const router = express.Router();

//Get Users-Either students or faculty
router.get("/", (req, res, next) => {
  res.status(200).json({
    msg: "Handling GET Requests"
  });
});

//Post Users-Either students or faculty
router.post("/", (req, res, next) => {
  res.status(200).json({
    msg: "Handling POST Requests"
  });
});

//Get User
router.get("/:userId", (req, res, next) => {
  const userID = req.params.userId;
  if (userID === "ezana") {
    res.status(200).json({
      msg: "Your ID" + userID
    });
  } else {
    res.status(200).json({
      msg: "Handling POST Requests"
    });
  }
});

router.patch("/:userId", (req, res, next) => {
  const userID = req.params.userId;
  res.status(200).json({
    msg: "updated product"
  });
});

//No need to delete users not in requirement
router.delete("/:userId", (req, res, next) => {
  const userID = req.params.userId;
  res.status(200).json({
    msg: "updated product"
  });
});

module.exports = router;
