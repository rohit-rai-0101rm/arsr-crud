const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
var cors = require('cors')

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
app.use(cors())

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route Imports
const employee = require("./routes/employeeRoute");


app.use("/api/v1", employee);


app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
