const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.json());

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const Students = require("./routes/students");
const Faculty = require("./routes/Faculty");

app.use("/students", Students);
app.use("/faculty", Faculty);

const port = process.env.PORT || 6000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
