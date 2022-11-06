const Tour = require("../model/Tour");

// tour get service
exports.getTourService = async () => {
  const tour = await Tour.find({});
  return tour;
};

// tour create/post service
exports.postTourService = async (data) => {
  const tourPost = await Tour.create(data);
};
