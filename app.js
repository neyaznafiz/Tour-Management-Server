const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { reset } = require("nodemon");
const tourRoute = require("./routes/tour.route");

// Middlewares
app.use(cors());
app.use(express.json());

// Route
app.use("/api/v1/tour-info", tourRoute);

// Default Route
app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// Not Found Route
app.get("*", (req, res) => {
  res.status(404).send({
    status: 404,
    message: "Route Not Found"
  });
});

module.exports = app;
