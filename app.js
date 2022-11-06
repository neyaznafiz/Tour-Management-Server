const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.post("/api/v1/tour-info", (req, res, next) => {
    // res.send("post is working");
    res.send(req.body)
});

module.exports = app;
