const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRoutes = require("./api/routes/userRoutes");
const courseRoutes = require("./api/routes/courseRoutes");
const cors = require("cors");

const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;

// const uri =
//   "mongodb+srv://ezana:" +
//   process.env.MONGO_ATLAS_PW +
//   "@cluster0-ujg8d.mongodb.net/test?retryWrites=true";

// MongoClient.connect(uri, (err, client) => {
//   if (err) {
//     console.log("Error Occured while connecting to MongoDB", err);
//   }
//   console.log("DB Connected");
// });
mongoose.connect(
  "mongodb+srv://ezana:" +
    process.env.MONGO_ATLAS_PW +
    "@cluster0-ujg8d.mongodb.net/test?retryWrites=true",
  { useNewUrlParser: true }
);
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*"); //Change to localhost:3000
//   //   res.header(
//   //     "Access-Control-Allow-Headers",
//   //     "Origin,X-Requested-With,Content-Type,Accept,Authorization"
//   //   );
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//     return res.status(200).json({});
//   }
// });
//Middleware for User routes
app.use("/users", userRoutes);
//Middleware for Course routes
app.use("/course", courseRoutes);

//Error handling
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status) || 500;
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
