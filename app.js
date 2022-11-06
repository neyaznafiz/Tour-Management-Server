const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { reset } = require("nodemon");
const tourRoute = require("./routes/tour.route");

// middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use("/api/v1/tour-info", tourRoute);

// app.post("/api/v1/tour-info", (req, res, next) => {
//     // res.send("post is working");
//     res.send(req.body)
// });

module.exports = app;
