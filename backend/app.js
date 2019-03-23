const express = require("express");
const app = express();

const userRoutes = require("./api/routes/userRoutes");
const courseRoutes = require("./api/routes/courseRoutes");

//Middleware for User routes
app.use("/users", userRoutes);
//Middleware for Course routes
app.use("/course", courseRoutes);

module.exports = app;
