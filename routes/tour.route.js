const express = require("express");
const router = express.Router();
const tourController = require("../controller/tour.controller");

router
    .route("/")
    .get(tourController.getTour)
    .post(tourController.createTour);


module.exports = router;
