const {
  postTourService,
  getTourService,
} = require("../services/tour.services");

// tour get controller
exports.getTour = async (req, res, next) => {
  try {
    const result = await getTourService();

    res.status(200).send({
      status: "success",
      message: "Tour found successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "No tour found..!!",
      error: error.message,
    });
  }
};

// tour create/post controller
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
