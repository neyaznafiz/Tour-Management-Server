const { postTourService } = require("../services/tour.services");

exports.createTour = async (req, res, next) => {
  try {
    const result = await postTourService(req.body);

    res.status(200).send({
      status: "successful",
      message: "Tour inserted successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Data insert failed..!!",
      error: error.message,
    });
  }
};
